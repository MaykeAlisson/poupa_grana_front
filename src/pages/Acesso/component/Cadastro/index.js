import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

// import Logo from "../../../../../public/images/moedas80x80.png";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";

const Cadastro = () => {

    const classes = useStyles();

    return (
        <>
            <div style={{width: 300, padding: 10}}>
                <div className={classes.logo}>
                    <img
                        style={{margin: 10}}
                        // src={Logo}
                        alt="logo poupa grana"
                    />
                </div>
                <TextField
                    className={classes.input}
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
                <FormLabel required={true} className={classes.input} component="legend">Sexo</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value="F"
                        control={<Radio color="primary" />}
                        label="Feminino"
                        labelPlacement="Femenino"
                    />
                    <FormControlLabel
                        value="M"
                        control={<Radio color="primary" />}
                        label="Masculino"
                        labelPlacement="Masculino"
                    />
                </RadioGroup>
                <TextField
                    className={classes.input}
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
                    className={classes.input}
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
                    className={classes.input}
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