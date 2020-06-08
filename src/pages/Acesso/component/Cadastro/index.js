import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Logo from "../../../../../public/images/moedas80x80.png";
import Paper from "@material-ui/core/Paper";

const Cadastro = () => {

    return (
        <>
            <div style={{width: 300, padding: 10}}>
                <div className="logo">
                    <img
                        style={{margin: 10}}
                        src={Logo}
                        alt="logo poupa grana"
                    />
                </div>
                <TextField
                    className="login___btn"
                    required
                    id="filled-basic"
                    label="Nome"
                    variant="filled"
                    type="text"
                    defaultValue=""
                    // error={erroCnpj}
                    // helperText={msgErroCNPJ}
                />
                <TextField
                    className="login___btn"
                    variant="filled"
                    label="Nascimento"
                    type="date"
                    defaultValue="2017-05-24"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="login___btn"
                    required
                    id="filled-basic"
                    label="Sexo"
                    variant="filled"
                    type="text"
                    defaultValue=""
                    // error={erroCnpj}
                    // helperText={msgErroCNPJ}
                />
                <TextField
                    className="login___btn"
                    required
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    type="text"
                    defaultValue=""
                    // error={erroCnpj}
                    // helperText={msgErroCNPJ}
                />
                <TextField
                    className="login___btn"
                    required
                    id="filled-basic"
                    label="Senha"
                    variant="filled"
                    type="text"
                    defaultValue=""
                    // error={erroCnpj}
                    // helperText={msgErroCNPJ}
                />
                <TextField
                    className="login___btn"
                    required
                    id="filled-basic"
                    label="Confirma Senha"
                    variant="filled"
                    type="text"
                    defaultValue=""
                    // error={erroCnpj}
                    // helperText={msgErroCNPJ}
                />
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    style={{
                        marginTop: 24, marginBottom: 24, color: 'white', backgroundColor: '#028743',
                    }}
                    onClick={() => {
                        // onClink()
                    }}
                >
                    Cadastro
                </Button>
                <Link
                    component="button"
                    variant="body2"
                    style={{width: '100%', textAlign: 'center'}}
                    onClick={() => {
                        // showPaginaLogin();
                    }}
                >
                    Já tenho conta,
                    {' '}
                    <span style={{fontWeight: 'bold'}}>Fazer Login</span>
                </Link>
            </div>
        </>
    );
}

export default Cadastro;