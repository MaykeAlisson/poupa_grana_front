import React, {useState} from 'react';
import {useEffect} from "react";

import Paper from '@material-ui/core/Paper';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import useStyles from './styles';
import Background from '../../../public/images/linhas-curvas.png';
import Login from './component/Login';
import Cadastro from './component/Cadastro';


const Acesso = () => {
    const classes = useStyles();

    const [ehCadastro, setCadastro] = useState(true);
    const [redirectBrowser, setRedirectBrowser] = useState(false);

    useEffect(() => {
        checkBrowser();
    }, []);

    const checkBrowser = () => {
        // console.log("CHECK BROWSER");
        let ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
            setRedirectBrowser(true);
            return;
            // return console.log('IE ' + (tem[1] || ''));
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        return; 
        // return console.log(M.join(' '));
    };

    return (
        <>
            <div className={classes.fullPage} style={{backgroundImage: `url(${Background})`}}>
                <div className={classes.pageCenter}>
                    <Paper elevation={24}>
                        {
                            ehCadastro
                                ? <Cadastro alteraCadastro={() => setCadastro(false)}/>
                                : <Login alteraCadastro={() => setCadastro(true)}/>
                        }
                    </Paper>
                </div>
            </div>

             <Dialog open={redirectBrowser} onClose={() => { setRedirectBrowser(false) }} aria-labelledby="form-dialog-title"> 
                <DialogTitle id="form-dialog-title" className="title_redirect_browser">ALERTA!</DialogTitle> 
                <DialogContent> 
                    <DialogContentText> 
                        <br/> 
                        SR(a) Usuario nosso sistema não e suportado por este navegador. 
                        <br/> 
                        Mude de navegador ou faça o dowloand {<Link href="http://google.com/chrome">aqui</Link>} 
                    </DialogContentText> 
                    <br/><br/> 
                </DialogContent> 
                <DialogActions> 
                    <Button onClick={() => { setRedirectBrowser(false) }} color="primary"> 
                        Fechar 
                    </Button> 
                </DialogActions> 
             </Dialog> 
        </>
    );
};

export default Acesso;
