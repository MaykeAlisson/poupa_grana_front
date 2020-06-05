import http from './clientHttp';
import isEmpty from '../infra/util/isEmpty';
import replaceAll from '../infra/util/String/replaceAll';
import trim from '../infra/util/String/trim';

const urlLogin = '/api/seguranca/v1/login/b2b';
const urlCliente = '/api/vendas/v1/clienteb2b';
const urlPedido = '/api/vendas/v1/pedidob2b';
const urlMercadoria = '/api/estoque/v1/mercadoriab2b';

export const Api = {

    Cliente: {

        buscar: () => http.get(urlCliente),

        buscarPrazos: cnpj => http.get( `${urlCliente}?cnpj=${cnpj}&prazos=true`),

        buscarVlrBoletoPrevisaoEntrega: cnpj => http.get( `${urlCliente}?cnpj=${cnpj}&boleto=true&previsao=true`)

    },

    Seguranca: {

        login: (cnpj, senha) => http.post(urlLogin, {cnpj, senha}),

        cadastro: (cnpj) => http.post( `${urlLogin}?solicitacao=true`, {cnpj}),

        trocaSenha: (senhaAtual, novaSenha) => http.patch(urlLogin, {senhaAtual, novaSenha}),

    },

    Mercadoria: {

        buscar: obj => {
            if (isEmpty(obj)) return [];
            const normalize = str => replaceAll(trim(str),'&',escape('&'));
            let fields = [];
            if (obj.hasOwnProperty('cnpj')) fields.push(`cnpj=${obj.cnpj}`);
            if (obj.hasOwnProperty('idClientePrazo')) fields.push(`prazo=${obj.idClientePrazo}`);
            if (obj.hasOwnProperty('descricaoMercadoria')) fields.push(`mercadoria=${normalize(obj.descricaoMercadoria)}`);
            if (obj.hasOwnProperty('categoria')) fields.push(`categoria=${normalize(obj.categoria)}`);
            if (obj.hasOwnProperty('subCategoria')) fields.push(`subCategoria=${normalize(obj.subCategoria)}`);
            if (obj.hasOwnProperty('mapex')) fields.push(`mapex=${obj.mapex}`);
            if (obj.hasOwnProperty('size')) fields.push(`size=${obj.size}`);
            if (obj.hasOwnProperty('from')) fields.push(`from=${obj.from}`);
            const query = fields.join('&');
            return http.get(`${urlMercadoria}?${query}`)
        },

        autocomplete: obj => {
            const query = `cnpj=${obj.cnpj}&filtro=${obj.filtro}&prazo=${obj.idClientePrazo}`;
            return http.get(`${urlMercadoria}/autocomplete?${query}`)
        },

        buscaCategorias: obj => {
            const query = `cnpj=${obj.cnpj}&prazo=${obj.idClientePrazo}`;
            return http.get(`${urlMercadoria}/categoria?${query}`)
        },

        buscaSubCategoria: obj => {
            const query = `cnpj=${obj.cnpj}&prazo=${obj.idClientePrazo}&categoria=${obj.categoria}`;
            return http.get(`${urlMercadoria}/subcategoria?${query}`)
        },

    },

    Pedido: {

        buscar: (cnpj) => http.get(`${urlPedido}?cnpj=${cnpj}`),

        gravar: (pedido) => http.post(urlPedido, {...pedido}),

        finalizar: (pedido) => http.post(`${urlPedido}?enviar=true`, {...pedido}),

        alterarPrazo: (cnpj,idClientePrazo) => http.patch(`${urlPedido}?cnpj=${cnpj}`, {idClientePrazo})
    }
};
