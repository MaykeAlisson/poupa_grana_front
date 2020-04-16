import React, { useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Button } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from "react";

import './index.css';
import Contexto from '../../../App/context';
import InputQuantidade from '../../../Pedido/components/InputQuantidade';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';

import NoItemsLayout from './noitems';

function getPrecoFormatado(number) {
  return (number).toLocaleString('pt-BR');
}

export default function SimpleTableCheckout(props) {

  const { itens, listaMercadoria, removeProdutoCarrinho } = useContext(Contexto);
  const [updateState, setState] = useState(false);

  const forceUpdate = () => {
    setState(!updateState);
    props.onChange();
  }

  const removerProduto = (codigo, produto) => {
    let prod = {
      codigo: codigo,
      codImg: produto.codImg,
      descricao: produto.descricao,
      preco: produto.preco,
      quantidade: 0
    };

    removeProdutoCarrinho(prod)
  }

  useEffect(() => {
  }, [listaMercadoria]);

  return (
    <TableContainer component={Paper}>
      <Table className="tabela_checkout___main" aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h4" gutterBottom style={{ fontWeight: 100 }}>
                Meus itens
              </Typography>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        {Array.from(itens) === undefined || Array.from(itens).length < 1 && (
          <NoItemsLayout/>
        )}

        {Array.from(itens) != undefined && Array.from(itens).length > 0 && (
          <TableBody>
            {Array.from(itens).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell width="100%">
                  <Grid container direction="column">
                    <img style={{ width: 70, marginTop: 12, marginBottom: 12 }} src={"http://img.arcom.com.br/imagens/produtos/" + (value.codImg == "" ? "0.png" : (value.codImg + "_b.jpg"))} />

                    <Grid className='tabela_checkout___descricao' item>
                      {value.descricao}
                    </Grid>
                    <Grid item xs zeroMinWidth className="info-preco">
                      <Typography display="inline" style={{ fontWeight: 600 }}>
                        {getPrecoFormatado(value.preco)}
                      </Typography>

                      <span style={{ marginLeft: 12, marginRight: 12 }}>-</span>

                      <Typography variant="overline" display="inline" style={{ color: "#a9a9a9", lineHeight: "0px" }}>
                        {value.qtde} {value.qtde > 1 ? "unidades" : "unidade"}
                      </Typography>
                    </Grid>
                    <Grid item xs className="div-botoes">
                      <InputQuantidade
                        hideInput={true}
                        onChange={() => {
                          forceUpdate();
                        }}
                        mercadoria={{
                          codImg: value.codImg,
                          codigo: key,
                          descricao: value.descricao,
                          preco: value.preco
                        }}
                      />
                      <ButtonGroup>
                        <Button
                          color="secondary"
                          onClick={() => {
                            removerProduto(key, value)
                          }}
                          aria-label="increase">
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}

      </Table>
    </TableContainer>
  );
}