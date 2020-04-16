import React, { useEffect } from 'react';
import { useContext } from 'react';

import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import './index.css';
import InputQuantidade from '../InputQuantidade';
import Contexto from '../../../App/context';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import TitlebarGridList from './gridmercadorias';

import TablePagination from "@material-ui/core/TablePagination";
import { useState } from "react";
import { Button } from '@material-ui/core';


function convertToFloatNumber(text) {
    text = text.replace(".", "");
    text = text.replace(",", ".");
    return parseFloat(text);
}

const Page = (props) => {

    const { itens, listaMercadoria } = useContext(Contexto);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [viewGrid, setViewGrid] = useState(true);

    useEffect(() => {
    }, [listaMercadoria]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const changeView = () => {
        setViewGrid(!viewGrid);
    };

    const getQuantidade = (mercadoria) => {
        let item = itens.get(mercadoria.codigo);
        return item ? item.qtde : 0;
    }

    return (
        <div>

            <div className="botoes">
                <Button
                    variant="outlined"
                    color={viewGrid ? "primary" : "default"}
                    onClick={() => {
                        changeView();
                    }}>
                    <AppsOutlinedIcon />
                </Button>
                <Button
                    variant="outlined"
                    color={viewGrid ? "default" : "primary"}
                    onClick={() => {
                        changeView();
                    }}>
                    <FormatListBulletedOutlinedIcon />
                </Button>
            </div>

            {viewGrid && (
                <TitlebarGridList />
            )}

            {!viewGrid && (
                <div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell align="left">Descrição</TableCell>
                                    <TableCell align="right">Preço</TableCell>
                                    <TableCell align="center">Quantidade</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listaMercadoria.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.codigo} className={getQuantidade(row) > 0 ? "row selected" : "row"}>
                                        <TableCell component="th" scope="row">
                                            <img className="tabela-mercadoria___img"
                                                alt={row.descricao}
                                                style={{ width: 80 }}
                                                src={"http://img.arcom.com.br/imagens/produtos/" + (row.codImg == "" ? "0.png" : (row.codImg + "_b.jpg"))}
                                            />
                                        </TableCell>
                                        <TableCell align="left">{row.descricao}</TableCell>
                                        <TableCell align="right">{row.preco}</TableCell>
                                        <TableCell align="right">
                                            <InputQuantidade
                                                mercadoria={{
                                                    codImg: row.codImg,
                                                    codigo: row.codigo,
                                                    descricao: row.descricao,
                                                    preco: convertToFloatNumber(row.preco)
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
            )}

        </div>
    );
};

export default Page;
