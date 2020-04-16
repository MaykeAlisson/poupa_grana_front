import React from "react";
import {useState} from 'react';

import Contexto from '../index';
import Session from '../../../../repository/Token';

const dados = [
    {
        codigo: 1,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 180ML',
        preco: "28,04",
        codImg: "32792",
    },
    {
        codigo: 2,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 AERO 170G',
        preco: "33,07",
        codImg: "32794",
    },
    {
        codigo: 3,
        produto: 'Bozzano',
        descricao: 'APARELHO BOZZANO COMFORT 2 LAMINAS REF636 12X2',
        preco: "36,28",
        codImg: "38990",
    },
    {
        codigo: 4,
        produto: 'Dentil',
        descricao: 'CREME DENTAL DENTIL BRANQUEADOR MENTA 12X90G',
        preco: "31,31",
        codImg: "34365",
    },
    {
        codigo: 5,
        produto: 'Energizer',
        descricao: 'BATERIA ENERGIZER 9V.12X1',
        preco: "124,21",
        codImg: "301",
    },
    {
        codigo: 6,
        produto: 'IsaBaby',
        descricao: 'ISABABY ABSORVENTE PARA SEIOS 12 UNIDADES',
        preco: "10,09",
        codImg: "",
    },
    {
        codigo: 7,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 180ML',
        preco: "28,04",
        codImg: "32792",
    },
    {
        codigo: 8,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 AERO 170G',
        preco: "33,07",
        codImg: "32794",
    },
    {
        codigo: 9,
        produto: 'Bozzano',
        descricao: 'APARELHO BOZZANO COMFORT 2 LAMINAS REF636 12X2',
        preco: "36,28",
        codImg: "38990",
    },
    {
        codigo: 10,
        produto: 'Dentil',
        descricao: 'CREME DENTAL DENTIL BRANQUEADOR MENTA 12X90G',
        preco: "31,31",
        codImg: "34365",
    },
    {
        codigo: 11,
        produto: 'Energizer',
        descricao: 'BATERIA ENERGIZER 9V.12X1',
        preco: "124,21",
        codImg: "301",
    },
    {
        codigo: 12,
        produto: 'IsaBaby',
        descricao: 'ISABABY ABSORVENTE PARA SEIOS 12 UNIDADES',
        preco: "10,09",
        codImg: "",
    },
    {
        codigo: 13,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 180ML',
        preco: "28,04",
        codImg: "19129_b.jpg",
        codImg: "32792",
    },
    {
        codigo: 14,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 AERO 170G',
        preco: "33,07",
        codImg: "32794",
    },
    {
        codigo: 15,
        produto: 'Bozzano',
        descricao: 'APARELHO BOZZANO COMFORT 2 LAMINAS REF636 12X2',
        preco: "36,28",
        codImg: "38990",
    },
    {
        codigo: 16,
        produto: 'Dentil',
        descricao: 'CREME DENTAL DENTIL BRANQUEADOR MENTA 12X90G',
        preco: "31,31",
        codImg: "34365",
    },
    {
        codigo: 17,
        produto: 'Energizer',
        descricao: 'BATERIA ENERGIZER 9V.12X1',
        preco: "124,21",
        codImg: "301",
    },
    {
        codigo: 18,
        produto: 'IsaBaby',
        descricao: 'ISABABY ABSORVENTE PARA SEIOS 12 UNIDADES',
        preco: "10,09",
        codImg: "",
    },
    {
        codigo: 19,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 180ML',
        preco: "28,04",
        codImg: "19129_b.jpg",
        codImg: "32792",
    },
    {
        codigo: 20,
        produto: 'Banana Boat',
        descricao: 'BANANA BOAT ADVANCED PROTECTION FPS 50 AERO 170G',
        preco: "33,07",
        codImg: "32794",
    },
    {
        codigo: 21,
        produto: 'Bozzano',
        descricao: 'APARELHO BOZZANO COMFORT 2 LAMINAS REF636 12X2',
        preco: "36,28",
        codImg: "38990",
    },
    {
        codigo: 22,
        produto: 'Dentil',
        descricao: 'CREME DENTAL DENTIL BRANQUEADOR MENTA 12X90G',
        preco: "31,31",
        codImg: "34365",
    },
    {
        codigo: 23,
        produto: 'Energizer',
        descricao: 'BATERIA ENERGIZER 9V.12X1',
        preco: "124,21",
        codImg: "301",
    },
    {
        codigo: 24,
        produto: 'IsaBaby',
        descricao: 'ISABABY ABSORVENTE PARA SEIOS 12 UNIDADES',
        preco: "10,09",
        codImg: "",
    }
];

const useApp = () => {

    const [itens, setItens] = useState(new Map());
    const [qtdProdutosLista, setQtdProdutosLista] = useState(0);
    const [prazoEntrega, setPrazoEntrega] = useState(10);
    const [razaoSocial, setRazaoSocial] = useState(null);
    const [cnpj, setCnpj] = useState(null);
    const [endereco, setEndereco] =useState(null);
    const [listaMercadoria, setListaMercadoria] = useState(dados);

    const buscaCredenciais = () => {
        setCnpj(Session.getItem('cnpj'));
        setRazaoSocial(Session.getItem('razaoSocial'));
        setEndereco(Session.getItem('endereco'));
    };


    const buscaQuantidadeProduto = () => {
        return (itens && typeof itens === 'object' && itens.size) ? itens.size : 0;
    };

    const adicionaProdutoCarrinho = (produto) => {

        setItens(
            itens.set(
                produto.codigo,
                {codImg: produto.codImg, descricao: produto.descricao, qtde: produto.quantidade, preco: produto.preco}
            ));
        setQtdProdutosLista(itens.size);
    };

    const removeProdutoCarrinho = (produto) => {

        if (produto.quantidade === 0) {
            itens.delete(produto.codigo);
            setQtdProdutosLista(itens.size);
            return;
        }
        setItens(
            itens.set(
                produto.codigo,
                {codImg: produto.codImg, descricao: produto.descricao, qtde: produto.quantidade, preco: produto.preco}
            ));
        setQtdProdutosLista(itens.size);
    };

    const valorTotalDoPedido = () => {

        let valorTotal = 0;

        itens.forEach((value, key) => {
            valorTotal = valorTotal + (value.preco * value.qtde);
        }, itens);

        return valorTotal;

    };

    const buscaMercadoria = (filtro) => {

        if (filtro === 'carrinho') {
            let lista = [];

            Array.from(itens).map(([key, value]) => {


                    let temp = {};
                    temp.codigo = key;
                    temp.descricao = value.descricao;
                    temp.preco = value.preco.toLocaleString('pt-BR');
                    temp.codImg = value.codImg;

                    lista.push(temp);

                }
            );

            setListaMercadoria(lista);
            return;
        }

        setListaMercadoria(dados);

    };

    const enviaPedido = () => {
        alert("ENVIA LISTA DE PEDIDO + CONTATO");
    };


    return {
        itens,
        qtdProdutosLista,
        prazoEntrega,
        razaoSocial,
        cnpj,
        endereco,
        listaMercadoria,
        buscaCredenciais,
        buscaQuantidadeProduto,
        adicionaProdutoCarrinho,
        removeProdutoCarrinho,
        valorTotalDoPedido,
        buscaMercadoria,
        enviaPedido
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