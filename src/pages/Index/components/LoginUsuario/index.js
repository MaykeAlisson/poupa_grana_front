import React from 'react';
import { useState } from 'react';
import {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './index.css';
import BarraNevagacao from '../BarraNavegacao';
import Button from '../../commons/CustomBtn';



const LoginUsuario = () => {

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const logar = (e) => {

    e.preventDefault();

    alert(`email: ${email} - senha: ${senha}`);
  };


  return (
    <Fragment>
      <BarraNevagacao/>
      <Paper className="login-paper">
        <h1>Login</h1>
        <hr className="login-hr"/>
        <form onSubmit={logar}>
          <div className="login-form___campo___email">
            <TextField
              required
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            </div>
            <div className="login-form___campo___senha">
            <TextField
              required
              label="Senha"
              type="password"
              margin="normal"
              variant="outlined"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
             
            />
            </div>
            <div className="login-form___campo___btn">
            <Button type="submit">
              Logar
            </Button>
          </div>
        </form>
      </Paper>
    </Fragment>
  )
}

export default LoginUsuario;