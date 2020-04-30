import React, { useState } from 'react';
import {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './index.css';
import BarraNevagacao from '../BarraNavegacao';
import Button from '../../commons/CustomBtn';


const CadastroUsuario = () => {

  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const cadastrar = (e) => {

    e.preventDefault();

    alert(`nome: ${nome} - email: ${email} - senha: ${senha}`);
  };

  return (
    <Fragment>
      <BarraNevagacao/>
      <Paper className="cadastro-usuario-paper">
        <h1>Cadastro</h1>
        <hr className="cadastro-usuario___hr"/>
        <form onSubmit={cadastrar}>
          <div className="cadastro-usuario-form___campo___nome">
            <TextField
              required
              label="Nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              margin="normal"
              variant="outlined"
            />
            </div>
            <div className="cadastro-usuario-form___campo___email">
            <TextField
              required
              label="E-mail"
              type="email"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="cadastro-usuario-form___campo___senha">
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
            <div className="cadastro-usuario-form___campo___btn">
            <Button type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      </Paper>
    </Fragment>
  )
}

export default CadastroUsuario;