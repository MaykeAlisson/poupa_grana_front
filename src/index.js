import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import { createMuiTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

import App from './pages/App';
import Routes from './routes';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f50b5'
        }
    },
    status: {
        danger: 'orange',
    },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
    <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App>
                    <Routes />
                </App>
            </ThemeProvider>
    </BrowserRouter>
    ,
    document.getElementById('container')
);