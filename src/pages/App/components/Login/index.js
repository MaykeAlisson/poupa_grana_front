import React from 'react';
import {Paper, Button, Link} from '@material-ui/core';
import Input from '../../../../infra/components/CustomTxtField';
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {useRef} from "react";
import {useContext} from "react";

import './styles.css';
import {Api} from '../../../../services/api';
import Session from '../../../../repository/Token';
import Contexto from "../../context";
import isEmpty from "../../../../infra/util/isEmpty";
import comCustomLoading from "../../../../infra/components/CustomLoading";
import comCustomMsg from "../../../../infra/components/CustomMsg";
import {useEffect} from "react";
import TextField from "@material-ui/core/TextField";

import ReactGA from 'react-ga';

const Request = Api.Cliente;

const Login = (
    {
        onLoginSuccess,
        msgErro,
        msgAviso,
        msgSucesso,
        loading
    }
) => {

    let history = useHistory();

    const {buscaCredenciais} = useContext(Contexto);
    const [ehCadastro, setCadastroCNPJ] = useState(false);
    const [erroCnpj, setErroCnpj] = useState(false);
    const [msgErroCNPJ, setMsgErroCNPJ] = useState("");
    const [erroSenha, setErroSenha] = useState(false);
    const [msgErroSenha, setMsgErroSenha] = useState("");
    const iptCnpj = useRef(null);
    const iptSenha = useRef(null);

    useEffect(() => iptCnpj.current.focus(), []);


    const showPaginaCadastro = () => {
        setCadastroCNPJ(true);
    };

    const showPaginaLogin = () => {
        setCadastroCNPJ(false);
        setErroCnpj(false);
        setMsgErroCNPJ("");
    };

    const onClink = async () => {
        const cnpj = iptCnpj.current.value;

        if (isEmpty(cnpj)) {
            setMsgErroCNPJ("Obrigatório informar o CNPJ");
            setErroCnpj(true);
            return;
        }
        setMsgErroCNPJ("");
        setErroCnpj(false);

        try {
            loading(true);
            if (ehCadastro) {
                if (cnpj === "") {
                    setErroCnpj(true);
                    setMsgErroCNPJ("Obrigatório informar o CNPJ");
                    return;
                }
                setErroCnpj(false);
                setMsgErroCNPJ("");

                // let response = await Request.cadastro(parseInt(cnpj));
                // msgSucesso(response);
                msgSucesso("Em Breve você recebera uma senha no e-mail: fulano@gmail.com!")
                iptCnpj.current.value = '';
                // alert("Confirmar CNPJ e enviar email para o cliente...")

                ReactGA.event({
                    category: 'new_user',
                    action: 'create_account',
                    label: cnpj,
                });
            } else {
                const senha = iptSenha.current.value;

                if (isEmpty(senha)) {
                    setMsgErroSenha("Obrigatório informar a Senha");
                    setErroSenha(true);
                    return;
                }
                setMsgErroSenha("");
                setErroSenha(false);

                // let response = await Request.login(parseInt(cnpj), senha);

                // msgSucesso(response)

                Session.setItem('token', 'token_aqui');
                Session.setItem('cnpj', '32.287.045/0001-85');
                Session.setItem("razaoSocial", "Supermercado Campeão");
                Session.setItem("endereco", " Republica do Piratini, 481");
                buscaCredenciais();
                onLoginSuccess();
                loading(false);
                history.push("/");

                ReactGA.event({
                    category: 'user',
                    action: 'login',
                    label: 'CNPJ do login: ' + cnpj,
                });
            }
        } catch (error) {
            msgErro(error);
        } finally {
            loading(false);
        }

    };

    return (
        <div className="full-page">
            <div
                className="full-page-transparency">
                <Paper
                    elevation={24}>

                    <div
                        style={{width: 280, padding: 30}}>

                        <div className="logo">
                            <a href={"http://www.arcom.com.br/"}>
                                <img style={{maxWidth: 100}}
                                     src="https://media-exp1.licdn.com/dms/image/C510BAQHml9VWZyqWlw/company-logo_200_200/0?e=2159024400&v=beta&t=qVh0hUoqKySIA4nyTjKgJfY8It_I5b5_y_AoXiI5nj4"
                                     alt={"logo arcom"}/>
                            </a>
                        </div>

                        <div style={{height: 24}}/>

                        <TextField
                            className='login___btn'
                            required={true}
                            id="filled-basic"
                            label="CNPJ"
                            variant="filled"
                            type='number'
                            defaultValue=''
                            error={erroCnpj}
                            helperText={msgErroCNPJ}
                            onInput={(e) => {
                                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 14)
                            }}
                            inputRef={iptCnpj}
                        />

                        {!ehCadastro && (
                            <div>
                                <div style={{height: 12}}/>

                                <TextField
                                    className='login___btn'
                                    required={true}
                                    id="filled-basic"
                                    label="Senha"
                                    variant="filled"
                                    type='password'
                                    defaultValue=''
                                    error={erroSenha}
                                    helperText={msgErroSenha}
                                    inputRef={iptSenha}
                                />

                            </div>
                        )}

                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            style={{marginTop: 24, marginBottom: 24, color: "white", backgroundColor: "#028743"}}
                            onClick={() => {
                                onClink()
                            }}
                        >
                            {ehCadastro ? "Cadastrar" : "Entrar"}
                        </Button>

                        {!ehCadastro && (
                            <Link
                                component="button"
                                variant="body2"
                                style={{width: "100%", textAlign: "center"}}
                                onClick={() => {
                                    showPaginaCadastro();
                                }}
                            >
                                É cliente Arcom mas não tem cadastro ainda? <span style={{fontWeight: "bold"}}>Clique aqui</span>
                            </Link>
                        )}

                        {ehCadastro && (
                            <Link
                                component="button"
                                variant="body2"
                                style={{width: "100%", textAlign: "center"}}
                                onClick={() => {
                                    showPaginaLogin();
                                }}
                            >
                                Sou cliente Arcom, <span style={{fontWeight: "bold"}}>Fazer Login</span>
                            </Link>
                        )}
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default comCustomLoading(comCustomMsg(Login));