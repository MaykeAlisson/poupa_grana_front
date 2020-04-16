import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from "@material-ui/core/TablePagination";

import './index.css';
import InputQuantidade from '../InputQuantidade';
import Contexto from '../../../App/context';
import {useContext} from 'react';
import {useEffect} from 'react';
import {useState} from "react";
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function convertToFloatNumber(text) {
    text = text.replace(".", "");
    text = text.replace(",", ".");
    return parseFloat(text);
}

export default function TitlebarGridList() {
  const classes = useStyles();

  const {itens, listaMercadoria} = useContext(Contexto);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(24);

  useEffect(() => {
    }, [listaMercadoria]);

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
  };

  const getQuantidade = (mercadoria) => {
    let item = itens.get(mercadoria.codigo);
    return item ? item.qtde : 0;
  }

  return (
    <div>
      
        <Grid container>
            {listaMercadoria.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <Grid key={row.codigo} container item xs={12} sm={6} md={4} lg={3} >
                    <Paper className={getQuantidade(row) > 0 ? "card selected" : "card"}>
                        <div className="box-image">
                            <img 
                              src={"http://img.arcom.com.br/imagens/produtos/" + (row.codImg == "" ? "0.png" : (row.codImg + "_b.jpg"))}
                              style={{ width: 100 }}/>
                        </div>
                        <div className="info-produto">
                            <div style={{textAlign:"center"}}>
                                <Typography className="nome-produto" variant="h1" gutterBottom>{row.descricao}</Typography>
                                <Typography className="valor-produto" variant="button" gutterBottom>{row.preco}</Typography>
                            </div>
                            <InputQuantidade
                                mercadoria={{
                                    codImg: row.codImg,
                                    codigo: row.codigo,
                                    descricao: row.descricao,
                                    preco: convertToFloatNumber(row.preco)
                                }}
                            />
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>

        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={listaMercadoria.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />    
    </div>
  );
}
