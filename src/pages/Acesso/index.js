import React, {useState} from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import './styles.css';
import useStyles from './styles';
import Background from '../../../public/images/linhas-curvas.png';
import Logo from '../../../public/images/moedas80x80.png';
import Login from './component/Login';
import Cadastro from './component/Cadastro';

const Acesso = () => {
    const classes = useStyles();

    const [ehCadastro, setCadastro] = useState(true);
    const [textBtn, setTextBtn] = useState('Login')

    const showPaginaCadastro = () => {
        setCadastro(true)
        setTextBtn('Cadastro')
    }

    const showPaginaLogin = () => {
        setCadastro(false)
        setTextBtn('Login')
    }

    return (
        <>
            <div className={classes.fullPage} style={{backgroundImage: `url(${Background})`}}>
                <div className="full-page-transparency">
                    <Paper elevation={24}>
                        {
                            ehCadastro
                                ? <Cadastro alteraCadastro={() => setCadastro(false)}/>
                                : <Login alteraCadastro={() => setCadastro(true)}/>
                        }
                    </Paper>
                </div>
            </div>

            {/* <Dialog open={redirectBrowser} onClose={() => { setRedirectBrowser(false) }} aria-labelledby="form-dialog-title"> */}
            {/*    <DialogTitle id="form-dialog-title" className="title_redirect_browser">ALERTA!</DialogTitle> */}
            {/*    <DialogContent> */}
            {/*        <DialogContentText> */}
            {/*            <br/> */}
            {/*            SR(a) Cliente nosso sistema não e suportado por este navegador. */}
            {/*            <br/> */}
            {/*            Mude de navegador ou faça o dowloand {<Link href="http://google.com/chrome">aqui</Link>} */}
            {/*        </DialogContentText> */}
            {/*        <br/><br/> */}
            {/*    </DialogContent> */}
            {/*    <DialogActions> */}
            {/*        <Button onClick={() => { setRedirectBrowser(false) }} color="primary"> */}
            {/*            Fechar */}
            {/*        </Button> */}
            {/*    </DialogActions> */}
            {/* </Dialog> */}
        </>
    );
};

export default Acesso;
