import http from './clientHttp';

export const Api = {

    Cliente: {

        login: (cnpj, senha) => http.post(`/api/seguranca/v1/b2b-login`, {cnpj, senha}),

        cadastro: (cnpj) => http.post( `/api/seguranca/v1/b2b-cadastro`, {cnpj} ),

    },

    Mercadoria: {

        buscar: descricao => http.get(`/v1/mercadoria?cpf=${descricao}`),

        buscarTodos: () => http.post(`/v1/mercadoria`),
    },

    Pedido: {

        gravar: () => http.post(`/v1/pedido`)
    }

};
