import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './pages/App';
import Routes from './routes';
import Analytics from 'react-router-ga';

import 'typeface-roboto';

let theme = createMuiTheme({
    palette: {
    },
    status: {
        danger: 'orange',
    },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <BrowserRouter>
        <Analytics id="UA-52263416-1">
            <ThemeProvider theme={theme}>
                <App>
                    <Routes />
                </App>
            </ThemeProvider>
        </Analytics>
    </BrowserRouter>
    ,
    document.getElementById('container')
);