import React from "react";
import {useState} from 'react';

import Contexto from '../index';
import {Api} from '../../../../services/api';
import isEmpty from "../../../../infra/util/isEmpty";
import ClienteRepository from 'Repository/ClienteRepository';
import PedidoRepository from 'Repository/PedidoRepository';

const pedidoService = Api.Pedido;
const mercadoriaService = Api.Mercadoria;
const previsaoEntregaService = Api.PrevisaoEntrega;

const useApp = () => {

    const [pedido, setPedido] = useState({
        id: null,
        idClientePrazo: null,
        nroInscricao: null,
        situacaoPedido: 0,
        prazoEntrega: 0,
        qtdItens: 0,
        itens: []
    });
    const [itens, setItens] = useState(new Map());
    const [idPedido, setIdPedido] = useState(null);
    const [qtdProdutosLista, setQtdProdutosLista] = useState(0);
    const [prazoEntrega, setPrazoEntrega] = useState(0);
    const [cliente, setCliente] = useState(ClienteRepository.get());
    const [filtroTela, setFiltroTela] = useState({});
    const [listaMercadoria, setListaMercadoria] = useState(null);
    const [dadosAutocomplete, setDadosAutocomplete] = useState([]);
    const [vlrTotalPedido, setVlrTotalPedido] = useState(null);

    const buscaCredenciais = () => {

        setCliente( ClienteRepository.get() );
        buscaIdPedido();
    };


    const buscaIdPedido = () => {
        setIdPedido( PedidoRepository.get() );
    };

    const buscarAutoCompleteMercadorias = async (filtro, cb = () => {}) => {

        try {
            const obj = {
                cnpj: cliente.cnpj,
                filtro: filtro,
                idClientePrazo: cliente.prazo.id
            };
            const dados = await mercadoriaService.autocomplete(obj);

            if (isEmpty(dados)) {
                cb({msgAviso: "Não localizou nada"});
                return;
            }
            setDadosAutocomplete(dados);
        } catch (e) {
            cb(e);
        }

    };

    const buscarMercadoria = async (mercadoria,from,size, cb = () => {}) => {

        try {
            const obj = {
                size: size,
                from: from,
                cnpj: cliente.cnpj,
                descricaoMercadoria: mercadoria,
                idClientePrazo: cliente.prazo.id
            };
            const dados = await mercadoriaService.buscar(obj);

            if (isEmpty(dados)) {
                cb({msgAviso: "Não localizou nada"});
                return;
            }

            if (isEmpty(dados.mercadorias)) {
                cb({msgAviso: "Nenhuma Mercadoria Encontrada"});
                return;
            }
            setFiltroTela(mercadoria);
            setMercadorias(dados);
        } catch (e) {
            cb(e);
        }

    };

    const buscarPrevisaoEntrega = async (cb = () => {
    }) => {

        try {
            const previsao = await previsaoEntregaService.buscar(ClienteRepository.getCNPJ());
            if (isEmpty(previsao)) {
                cb({msgAviso: "Não localizou nada"});
                return;
            }

            setPrazoEntrega(previsao.qtdeDiasEntrega);
        } catch (e) {
            cb(e);
        }
    };


    const buscaMercadoriaFiltro = async (filtro, cb = () => {
    }) => {

        try {

            switch (filtro) {
                case 'carrinho':
                    let lista = [];
                    Array.from(itens).map(([key, value]) => {

                            let temp = {};
                            temp.idMercadoria = key;
                            temp.descricaoCompleta = value.descricao;
                            temp.precoVenda = value.preco;
                            temp.qtdVendida = value.qtde;
                            temp.codigoFoto = value.codImg;
                            temp.qtdMinimaNoPedido = value.qtdMinimaNoPedido;
                            lista.push(temp);
                        }
                    );
                    setMercadorias({mercadorias:lista, total:lista.length});
                    break;
                default:
                    buscarMercadoria('',0,12);
                    break;

            }
        } catch (e) {
            cb(e);
        }

    };


    const setMercadorias = (mercadorias) => {
        setListaMercadoria(mercadorias);
    };

    const buscaQuantidadeProduto = () => {
        return (itens && typeof itens === 'object' && itens.size) ? itens.size : 0;
    };

    const adicionaProdutoCarrinho = (produto) => {

        if (isEmpty(pedido.nroInscricao)) {
            setPedido({
                ...pedido,
                ...{
                    nroInscricao: cliente.cnpj,
                    idClientePrazo: cliente.prazo.id
                }
            });
        }

        setItens(
            itens.set(
                produto.codigo,
                {codImg: produto.codImg, descricao: produto.descricao, qtde: produto.quantidade, preco: produto.preco, qtdMinimaNoPedido: produto.qtdMinimaNoPedido}
            ));
        setQtdProdutosLista(itens.size);
        valorTotalDoPedido();

    };

    const removeProdutoCarrinho = (produto) => {

        if (produto.quantidade === 0) {
            itens.delete(produto.codigo);
            setQtdProdutosLista(itens.size);

            salvaCarrinho();
            valorTotalDoPedido();
            return;
        }
        setItens(
            itens.set(
                produto.codigo,
                {codImg: produto.codImg, descricao: produto.descricao, qtde: produto.quantidade, preco: produto.preco, qtdMinimaNoPedido: produto.qtdMinimaNoPedido}
            ));
        setQtdProdutosLista(itens.size);
        valorTotalDoPedido();

    };

    const valorTotalDoPedido = () => {
        let valorTotal = 0;
        itens.forEach((value, key) => {
            valorTotal = valorTotal + (value.preco * value.qtde);
        }, itens);
        setVlrTotalPedido(valorTotal);
        return valorTotal;
    };

    const buscaPedidoEmAberto = async (cb =()=>{}) => {

        try {
            const cnpj = ClienteRepository.getCNPJ();
            const retorno = await pedidoService.busca(cnpj);

            if (isEmpty(retorno)  || isEmpty(retorno.id) ) {
                cb({});
                return;
            }

            const id = retorno.id;

            // GPortes: Rever depois!! A atribuição deve ser direta!!
            setPedido({
                ...pedido,
                ...{
                    id: retorno.id,
                    nroInscricao: retorno.cnpj,
                    idClientePrazo: retorno.idClientePrazo
                }
            });

            PedidoRepository.set(id);

            for (let i = 0; i < retorno.itens.length; i++){

                let value = retorno.itens[i];

                let mercadoria = {};
                mercadoria.codigo = value.idMercadoria;
                mercadoria.codImg = value.codigoFoto;
                mercadoria.descricao = value.descricaoCompleta;
                mercadoria.quantidade = value.qtdVendida;
                mercadoria.preco = value.precoUnitario;
                mercadoria.qtdMinimaNoPedido = value.qtdMinimaNoPedido;

                itens.set(
                    mercadoria.codigo,
                    {codImg: mercadoria.codImg, descricao: mercadoria.descricao, qtde: mercadoria.quantidade, preco: mercadoria.preco, qtdMinimaNoPedido: mercadoria.qtdMinimaNoPedido}
                );

            }
            setQtdProdutosLista(itens.size);

            cb({});

        } catch (e) {
            cb(e);
        }
    };

    const salvaCarrinho = async (cb =()=>{}) => {

        // O localstorage faz apenas o carregamento inicial do estado do componente!! Não devemos substituir sua função!!
        // const id = PedidoRepository.get();

        console.log(pedido);

        try {
            // let carrinho = {};
            let mercadorias = [];
            Array.from(itens).map(([key, value]) => {
                    let temp = {};
                    temp.idMercadoria = key;
                    temp.descricaoCompleta = value.descricao;
                    temp.qtdVendida = value.qtde;
                    temp.precoUnitario = value.preco;
                    temp.codigoFoto = value.codImg;
                    temp.qtdMinimaNoPedido = value.qtdMinimaNoPedido;
                    mercadorias.push(temp);
                },
            );
            // if (!isEmpty(id))
            //     carrinho.id = id;

            // carrinho.nroInscricao = parseInt(cliente.cnpj);
            // carrinho.situacaoPedido = 0;
            // carrinho.itens = mercadorias;

            let obj = {
                ...pedido,
                ...{ nroInscricao: parseInt(cliente.cnpj), itens: mercadorias }
            };

            // let response = await pedidoService.gravar(carrinho);
            let novoPedido = await pedidoService.gravar(obj);
            if (isEmpty(novoPedido) || isEmpty(novoPedido.id)) {
                cb({msgErro: 'Falhou gravação!! Tente mais tarde!! Sistema indisponível!!'});
                return;
            }

            console.log( novoPedido );

            PedidoRepository.set(novoPedido.id);
            setIdPedido(novoPedido.id); // Remover apos pois o cabecalho do pedido armazena tudo
            setPedido({ ...novoPedido });
            cb(null);

        } catch (e) {
            cb(e);
        }
    };

    const enviaPedido = async (nome, telefone, cb = () => {
    }) => {

        const id = PedidoRepository.get();

        try {
            //let pedido = {};
            let mercadorias = [];
            Array.from(itens).map(([key, value]) => {
                    let temp = {};
                    temp.idMercadoria = key;
                    temp.descricaoCompleta = value.descricao;
                    temp.qtdVendida = value.qtde;
                    temp.precoUnitario = value.preco;
                    temp.codigoFoto = value.codImg;
                    temp.qtdMinimaNoPedido = value.qtdMinimaNoPedido;
                    mercadorias.push(temp);
                },
            );

            // pedido.id = id;
            // pedido.nroInscricao = parseInt(cliente.cnpj);
            // pedido.situacaoPedido = 1;
            // pedido.itens = mercadorias;
            // pedido.contato = {nome: nome, telefone: telefone};

            let obj = {
                ...pedido,
                ...{ nroInscricao: parseInt(cliente.cnpj), itens: mercadorias, contato: {nome: nome, telefone: telefone} }
            };

            const response = await pedidoService.finalizar(obj);
            setItens(new Map());
            setQtdProdutosLista(0);
            PedidoRepository.delete();
            setIdPedido(null);

            cb({msgSucesso : "Pedido gravado com sucesso"});
        } catch (e) {
            cb(e);
        }

    };


    return {
        itens,
        qtdProdutosLista,
        prazoEntrega,
        cliente,
        listaMercadoria,
        filtroTela,
        dadosAutocomplete,
        vlrTotalPedido,
        buscaCredenciais,
        buscaIdPedido,
        buscaQuantidadeProduto,
        buscaPedidoEmAberto,
        adicionaProdutoCarrinho,
        buscarMercadoria,
        setMercadorias,
        removeProdutoCarrinho,
        valorTotalDoPedido,
        buscaMercadoriaFiltro,
        salvaCarrinho,
        enviaPedido,
        buscarPrevisaoEntrega,
        buscarAutoCompleteMercadorias,
        setDadosAutocomplete,
        pedido
    };
};

export default props => {

    const obj = useApp();

    return (
        <Contexto.Provider value={{...obj}}>
            {props.children}
        </Contexto.Provider>
    );
};