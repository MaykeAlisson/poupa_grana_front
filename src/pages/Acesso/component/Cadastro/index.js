import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

import useStyles from './styles';
import Logo from '../../../../../public/images/moedas80x80.png';
import comCustomMsg from "../../../../infra/components/CustomMsg";
import comCustomLoading from "../../../../infra/components/CustomLoading";

const Cadastro = (
    {
        alteraCadastro,
        msgErro,
        msgAviso,
        msgSucesso,
        loading
    }
) => {
    const classes = useStyles();

    return (
        <>
            <div style={{width: 300, padding: 10}}>
                <div className={classes.logo}>
                    <img
                        style={{margin: 10}}
                        src={Logo}
                        alt="logo poupa grana"
                    />
                </div>
                <TextField
                    className={classes.input}
                    required
                    label="Nome"
                    variant="filled"
                    type="text"
                    defaultValue=""
                />
                <TextField
                    className={classes.input}
                    variant="filled"
                    label="Nascimento"
                    type="date"
                    defaultValue="2017-05-24"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormLabel required className={classes.input} component="legend">Sexo</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value="F"
                        control={<Radio color="primary"/>}
                        label="Feminino"
                        labelPlacement="Feminino"
                    />
                    <FormControlLabel
                        value="M"
                        control={<Radio color="primary"/>}
                        label="Masculino"
                        labelPlacement="Masculino"
                    />
                </RadioGroup>
                <TextField
                    className={classes.input}
                    required
                    label="Email"
                    variant="filled"
                    type="text"
                    defaultValue=""
                />
                <TextField
                    className={classes.input}
                    required
                    label="Senha"
                    variant="filled"
                    type="text"
                    defaultValue=""
                />
                <TextField
                    className={classes.input}
                    required
                    label="Confirma Senha"
                    variant="filled"
                    type="text"
                    defaultValue=""
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
                        alteraCadastro();
                    }}
                >
                    Já tenho conta,
                    {' '}
                    <span style={{fontWeight: 'bold'}}>Fazer Login</span>
                </Link>
            </div>
        </>
    );
};

export default comCustomLoading(comCustomMsg(Cadastro));
