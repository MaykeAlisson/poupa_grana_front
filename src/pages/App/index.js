import React from 'react';
import {Fragment} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import BarraNavegacao from './components/BarraNavegacao';
import AppProvider from './context/provider';
import Login from './components/Login';
import Session from '../../repository/Token';

export default ({children}) => {

    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        setAutenticado(Session.isAuthenticated());
    }, []);

    if (autenticado) {
        return (
            <Fragment>
                <AppProvider>
                    <BarraNavegacao
                        onLogoutSuccess={() => {
                            setAutenticado(false);
                        }}
                    />
                    {children}
                </AppProvider>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <AppProvider>
                    <Login
                        onLoginSuccess={() => {
                            setAutenticado(true);
                        }}
                    />
                </AppProvider>
            </Fragment>
        );
    }
}