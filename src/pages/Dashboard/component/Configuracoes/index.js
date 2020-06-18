import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";

const Configuracoes = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <h1>Page Configurações</h1>
            <h2>{usuario}</h2>
        </>
    );

};

export default Configuracoes;