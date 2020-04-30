import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputBase from '@material-ui/core/InputBase';

import './index.css';
import Contexto from '../../../App/context';

const Componente = (props) => {

    useEffect(() => {
        carregaStateLista();
    }, []);

    const { itens, adicionaProdutoCarrinho, removeProdutoCarrinho } = useContext(Contexto);
    const [quantidade, setQuantidade] = useState(0);
    const [hideInput, setHideInput] = useState(false);

    const carregaStateLista = () => {
        setHideInput(props.hideInput);

        if (itens.has(props.mercadoria.codigo)) {
            setQuantidade(itens.get(props.mercadoria.codigo).qtde);
        }
    };

    const decrease = () => {

        let multiplo = props.mercadoria.multiplo;

        if (quantidade === 0)
            return;


        if (quantidade === multiplo) {
            let produto = {
                codImg: props.mercadoria.codImg,
                codigo: props.mercadoria.codigo,
                descricao: props.mercadoria.descricao,
                preco: props.mercadoria.preco,
                qtdMinimaNoPedido: props.mercadoria.multiplo,
                quantidade: quantidade - multiplo
            };

            removeProdutoCarrinho(produto)
        }

        setQuantidade(quantidade - multiplo);

        let produto = {
            codImg: props.mercadoria.codImg,
            codigo: props.mercadoria.codigo,
            descricao: props.mercadoria.descricao,
            preco: props.mercadoria.preco,
            qtdMinimaNoPedido: props.mercadoria.multiplo,
            quantidade: quantidade - multiplo
        };

        removeProdutoCarrinho(produto)

        props.onChange();
    };

    const increase = () => {

        let multiplo = props.mercadoria.multiplo;

        setQuantidade(quantidade >= 999 ? quantidade : quantidade + multiplo);

        let produto = {
            codImg: props.mercadoria.codImg,
            codigo: props.mercadoria.codigo,
            descricao: props.mercadoria.descricao,
            preco: props.mercadoria.preco,
            qtdMinimaNoPedido: props.mercadoria.multiplo,
            quantidade: quantidade + multiplo
        };

        adicionaProdutoCarrinho(produto);

        props.onChange();
    };

    return (
        <div className='input-qtde'>
            <Button
                variant='outlined'
                onClick={decrease}>
                <RemoveIcon fontSize='small' />
            </Button>
            {!hideInput && (
                <InputBase
                    type='number'
                    color='primary'
                    className='number-qtd'
                    value={quantidade <= 0 ? 0 : quantidade}
                    inputProps={{
                        style: { textAlign: "center" }
                    }}
                />
            )}
            <Button
                variant='outlined'
                onClick={increase}>
                <AddIcon fontSize="small" />
            </Button>
        </div>
    );

};

export default Componente;