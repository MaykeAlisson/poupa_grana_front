import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";

const Objetivos = () => {

    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);

    return (
        <>
            <h1>Page Objetivos</h1>
            <h2>{usuario}</h2>
        </>
    );

};

export default Objetivos;