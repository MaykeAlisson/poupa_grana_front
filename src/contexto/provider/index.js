import React from "react";
import {useState} from 'react';

import Contexto from '../index';

const useContexto = () => {

    const [usuario, setUsuario] = useState("Mayke");
    const [numero, setNumero] = useState(28);

    return {
        usuario,
        numero
    };
};

export default props => {

    const obj = useContexto();

    return (
        <Contexto.Provider value={{...obj}}>
            {props.children}
        </Contexto.Provider>
    );
};