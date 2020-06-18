import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";

const Informacoes = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <h1>Page Informaçoes</h1>
            <h2>{usuario}</h2>
        </>
    );

};

export default Informacoes;