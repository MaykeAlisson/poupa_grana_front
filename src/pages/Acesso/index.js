import React, {useState} from 'react';

import Paper from '@material-ui/core/Paper';

import useStyles from './styles';
import Background from '../../../public/images/linhas-curvas.png';
import Login from './component/Login';
import Cadastro from './component/Cadastro';

const Acesso = () => {
    const classes = useStyles();

    const [ehCadastro, setCadastro] = useState(false);

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
