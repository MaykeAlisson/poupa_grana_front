import React from 'react';
import {useEffect} from "react";
import {useContext} from "react";

import Typography from '@material-ui/core/Typography';

import './styles.css'
import Texto from 'Components/CustomTexto';
import Contexto from "../../../App/context";


export default () => {

    const {razaoSocial,buscaCredenciais} = useContext(Contexto);

    useEffect(() => {
        buscaCredenciais();
    }, []);

    return (
        <div className='pedido-cliente'>
            <Texto>Bem Vindo</Texto>
            <Typography className="cliente___nome">{razaoSocial}</Typography>
        </div>
    );
}