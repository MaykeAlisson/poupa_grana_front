import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';

import './styles.css'

export default function SearchTextField() {

    return (
        <Grid
            className="pesquisa-mercadoria___main"
            container
            item xs={12}
            spacing={3}
            style={{padding: 20, marginBottom: 40}}>
            <TextField
                id="filled-basic"
                label="Pesquisar..."
                variant="filled"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                }}>
                <SearchIcon/>
                Pesquisar
            </Button>
        </Grid>
    );
}