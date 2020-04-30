import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';

import './styles.css'
import {useRef} from "react";
import {useContext} from "react";
import Contexto from "../../../App/context";
import {Fragment} from "react";

export default function SearchTextField() {

    const {buscarMercadoria} = useContext(Contexto);
    const iptMercadoria = useRef(null);

    const pesquisaMercadoria = () => {
        const descricao = iptMercadoria.current.value;
    };

    return (
        <Fragment>

        </Fragment>
        // <Grid
        //     className="pesquisa-mercadoria___main"
        //     container
        //     item xs={12}
        //     spacing={3}
        //     style={{padding: 20, marginBottom: 40}}>
        //     <TextField
        //         id="filled-basic"
        //         label="Pesquisar..."
        //         variant="filled"
        //         inputRef={iptMercadoria}
        //     />
        //     <Button
        //         variant="contained"
        //         color="primary"
        //         onClick={() => {
        //             pesquisaMercadoria();
        //         }}>
        //         <SearchIcon/>
        //         Pesquisar
        //     </Button>
        // </Grid>
    );
}