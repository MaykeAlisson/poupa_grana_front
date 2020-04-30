import http from './clientHttp';

export const Api = {

    Cliente: {

        buscarPrazos: cnpj => http.get( `/api/vendas/v1/clienteb2b/prazo-pagto?cnpj=${cnpj}` ),

    },

    Seguranca: {

        login: (cnpj, senha) => http.post(`/api/seguranca/v1/b2b-login`, {cnpj, senha}),

        cadastro: (cnpj) => http.post( `/api/seguranca/v1/b2b-cadastro`, {cnpj} ),

        recuperaSenha: (cnpj) => http.post( `/api/seguranca/v1/b2b-recupera-senha`, {cnpj} ),

    },

    Mercadoria: {

        buscar: obj => {
            const query = `size=${obj.size}&from=${obj.from}&cnpj=${obj.cnpj}&mercadoria=${obj.descricaoMercadoria}&prazo=${obj.idClientePrazo}`;
            return http.get(`/api/estoque/v1/mercadoriab2b?${query}`)
        },

        autocomplete: obj => {
            const query = `cnpj=${obj.cnpj}&filtro=${obj.filtro}&prazo=${obj.idClientePrazo}`;
            return http.get(`/api/estoque/v1/mercadoriab2b/autocomplete?${query}`)
        },
    },

    Pedido: {

        busca: (cnpj) => http.get(`/api/vendas/v1/pedidob2b?cnpj=${cnpj}`),

        gravar: (pedido) => http.post(`/api/vendas/v1/pedidob2b`, {...pedido}), 

        finalizar: (pedido) => http.post(`/api/vendas/v1/pedidob2b?enviar=true`, {...pedido})

    },

    PrevisaoEntrega: {

        buscar: cnpj => http.get( `/api/transporte/v1/previsao-entregab2b?cnpj=${cnpj}` ),

    },

};
