import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import BarraNavegacao from './components/BarraNavegacao';
import AppProvider from './context/provider';
import Login from './components/Login';
import TokenRepository from 'Repository/TokenRepository';

export default ({children}) => {

    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        setAutenticado(TokenRepository.isAuthenticated());
    }, []);

    return (
        <AppProvider>
            {
                autenticado
                ? <>
                    <BarraNavegacao onLogoutSuccess={() => setAutenticado(false) } />
                    {children}
                  </>
                : <Login onLoginSuccess={() => setAutenticado(true)} />
            }
        </AppProvider>
    );
}