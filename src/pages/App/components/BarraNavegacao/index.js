import React from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom'

import Toolbar from 'Components/CustomToolbar';
import Btn from 'Components/CustomBtn';
import Icone from 'Icons/CustomIconCarrinhoCompra';
import Contexto from '../../context';
import {useEffect} from "react";

import './index.css';
import MenuLateral from './components/MenuLateral';
import {useState} from "react";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CustomizedInputBase from './searchtextfield';

const Page = (prop) => {

    const {qtdProdutosLista} = useContext(Contexto);
    const [exibirMenu, setExibirMenu] = useState(false);

    useEffect(() => {
    }, [qtdProdutosLista]);


    return (
        <Toolbar onClickMenu={() => setExibirMenu(true)}>
            <MenuLateral
                exibirMenu={exibirMenu}
                onFecharMenu={() => setExibirMenu(false)}
                onLogout={() =>  prop.onLogoutSuccess()}
            />

            {/* <form className="barra-pesquisa" noValidate autoComplete="off">
                <TextField 
                    className="input-pesquisa"
                    id="outlined-basic" 
                    placeholder="Pesquisa..." 
                    variant="outlined" 
                    fullWidth/>
            </form> */}

            <CustomizedInputBase/>

            <Divider style={{height: 28, marginLeft: 12}} orientation="vertical" />
            <IconButton className="icon-button" component={Link} to="/minha-conta">
                <AccountCircleOutlinedIcon />
            </IconButton>

            {
                qtdProdutosLista > 0 &&
                (
                    <Btn
                        className="btn-fechar-pedido"
                        component={Link}
                        estilo="outlined"
                        to='/finaliza-pedido'
                        icone={<Icone/>}
                        style={{color: "white", borderColor: "white"}}
                    >
                        {/* {qtdProdutosLista > 1 ? qtdProdutosLista + ' itens' : qtdProdutosLista + ' item'} */}
                        {qtdProdutosLista}
                    </Btn>
                )
            }
        </Toolbar>
    )
};

export default Page;