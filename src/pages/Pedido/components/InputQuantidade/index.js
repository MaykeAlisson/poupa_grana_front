import React, {useEffect} from "react";
import {useState} from "react";
import {useContext} from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputBase from '@material-ui/core/InputBase';

import './index.css';
import Contexto from '../../../App/context';

const inputQtd = (props) => {

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

    if (quantidade === 0)
      return;

    if (quantidade === 1) {
      let produto = {
        codImg: props.mercadoria.codImg,
        codigo: props.mercadoria.codigo,
        descricao: props.mercadoria.descricao,
        preco: props.mercadoria.preco,
        quantidade: quantidade - 1
      };

      removeProdutoCarrinho(produto)
    }

    setQuantidade(quantidade - 1);

    let produto = {
      codImg: props.mercadoria.codImg,
      codigo: props.mercadoria.codigo,
      descricao: props.mercadoria.descricao,
      preco: props.mercadoria.preco,
      quantidade: quantidade - 1
    };

    removeProdutoCarrinho(produto)

    props.onChange();
  };

  const increase = () => {

    setQuantidade(quantidade >= 999 ? quantidade : quantidade + 1);

    let produto = {
      codImg: props.mercadoria.codImg,
      codigo: props.mercadoria.codigo,
      descricao: props.mercadoria.descricao,
      preco: props.mercadoria.preco,
      quantidade: quantidade + 1
    };

    adicionaProdutoCarrinho(produto);

    props.onChange();

  };

  return (
    <ButtonGroup style={{ justifyContent: "center" }}>
      <Button
        aria-label="reduce"
        onClick={decrease}>
        <RemoveIcon fontSize="small" />
      </Button>
      {!hideInput && (
        <InputBase
          type="number"
          className="number-qtd"
          value={quantidade <= 0 ? 0 : quantidade}
          inputProps={{
            style: { textAlign: "center" }
          }}
        />
      )}
      <Button
        aria-label="increase"
        onClick={increase}>
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  );
};

export default inputQtd;