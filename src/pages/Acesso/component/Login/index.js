import React, {useState} from "react";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import isEmpty from "../../../../infra/util/isEmpty";
import comCustomLoading from "../../../../infra/components/CustomLoading";
import comCustomMsg from "../../../../infra/components/CustomMsg";
import Logo from "../../../../../public/images/moedas80x80.png";

const Login = (
    {
        alteraCadastro,
        msgErro,
        msgAviso,
        msgSucesso,
        loading
    }
) => {

    const [textBtn, setTextBtn] = useState('Login')

    return (
        <>
            <div style={{width: 280, padding: 30}}>
                <div className="logo">
                    <img
                        style={{margin: 16}}
                        src={Logo}
                        alt="logo poupa grana"
                    />
                </div>
                <div style={{height: 24}}/>
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
                <div>
                    <div style={{height: 12}}/>
                    <TextField
                        className="login___btn"
                        required
                        id="filled-basic"
                        label="Senha"
                        variant="filled"
                        type="password"
                        defaultValue=""
                    />
                    <div className="login___esqueci-senha">
                        <MenuItem
                            onClick={() => {
                                // showPaginaCadastro();
                                // setTextBtn("Solicitar Senha");
                                // setRecuperarSenha(true);
                            }}
                        >
                            Esqueci minha senha
                        </MenuItem>
                    </div>
                </div>
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
                    {textBtn}
                </Button>
                <Link
                    component="button"
                    variant="body2"
                    style={{width: '100%', textAlign: 'center'}}
                    onClick={() => {
                        alteraCadastro();
                    }}
                >
                    Deseja cadastrar-se?
                    {' '}
                    <span style={{fontWeight: 'bold'}}>Clique aqui</span>
                </Link>
            </div>
        </>
    );
}

export default comCustomLoading(comCustomMsg(Login));