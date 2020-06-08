import React, {useState} from 'react';

import AppProvider from '../../contexto/provider';
import Acesso from "../Acesso";

export default ({children}) => {

    const [autenticado, setAutenticado] = useState(false);

    // useEffect(() => {
    //     setAutenticado(TokenRepository.isAuthenticated());
    // }, []);

    return (
        <>
            {
                autenticado
                    ? <AppProvider>{children}</AppProvider>
                    : <Acesso/>
            }
        </>
    );
}