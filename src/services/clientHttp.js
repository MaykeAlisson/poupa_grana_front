import axios from 'axios';
import Token from "../repository/Token";

const baseURL = () => {
    if (process.env.NODE_ENV === 'production')
        return 'http://playextdev.arcom.com.br';
    const os = require('os');
    return `http://${os.hostname()}:6030`;
};

const clientHttp = axios.create({
    baseURL: baseURL(),
    mode: 'cors',
    withCredentials: false
});

clientHttp.interceptors.request.use(

    config => {
        config.headers['Authorization'] = 'Bearer ' + Token.getToken();
        return config;
    },

    error => Promise.reject(error)
);

// axios.defaults.validateStatus = function () {
//     return true;
// };

const NO_CONTENT = 204;
const UNAUTHORIZED = 401;

clientHttp.interceptors.response.use(

    response => {

        if (response.status === NO_CONTENT) return undefined;
        return response.data;
    },

    error => {

        let erro = {
            stack: '',
            message: 'Erro ao executar API - Contate o departamento de TI'
        };

        if (error.response)  {

            const data = error.response.data;


            erro = traduzErro(data);
            if (error.response.status === UNAUTHORIZED) {
                erro = {
                    stack: error.request.responseURL,
                    message: 'Falhou autenticacao'
                };
                console.error(erro);
                Token.clear();
                window.location = '/';
            }

        } else {
            Token.clear();
            window.location = '/';
        }

        return Promise.reject(erro);
    }
);


const traduzErro = data => {

    let retorno = {
        stack: '',
        message: 'Erro ao executar API - Contate o departamento de TI'
    };

    if (data.erro) {
        if (data.erro.sqlRegistroDuplicado || data.erro.sqlRegistroAlteradoPorOutroUsuario) {
            const message = data.erro.sqlRegistroDuplicado
                ? 'Registro já foi inserido por outro usuario!'
                : 'Registro alterado entre sua leitura e gravação!! Recarregue a tela!!';
            retorno = {
                stack: data.erro.stack || '???',
                message
            };
            console.error(`Erro Api: ${retorno.stack}`);
            console.error(`Mensagem: ${retorno.message}`);
        } else {
            if (data.erro) {
                if (data.erro.stack) {
                    retorno = {
                        stack: data.erro.stack || '???',
                        message: data.erro.message || '???'
                    };
                    console.error(`Erro Api: ${retorno.stack}`);
                    console.error(`Mensagem: ${retorno.message}`);
                } else if (data.erro.message) {
                    retorno = {message: data.erro.message};
                } else {
                    retorno = {message: data.erro};
                }
            } else {
                retorno = {
                    ...retorno,
                    message: `Falha ao acessar API ...`
                };
                console.error(data);
            }
        }
    } else {
        if (typeof data === 'string') {
            retorno = {...retorno, message: data};
        }
    }

    return retorno;
}
export default clientHttp;