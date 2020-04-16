import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StoreIcon from '@material-ui/icons/Store';
import Typography from "@material-ui/core/Typography";

import './styles.css';
import Session from '../../../../../../repository/Token';
import Divider from "@material-ui/core/Divider";
import Contexto from '../../../../../App/context';
import { Link } from 'react-router-dom'
import { useEffect } from "react";


const Page = ({
    exibirMenu,
    onFecharMenu,
    onLogout
}) => {

    let history = useHistory();

    const logout = () => {
        Session.clear();
        onLogout();
        history.push("/login");
    };

    const minhaConta = () => {
        onFecharMenu();
        history.push("/minha-conta");
    };

    const comprar = () => {
        onFecharMenu();
        history.push("/pedido");
    };

    const { razaoSocial, cnpj, endereco, buscaCredenciais } = useContext(Contexto);

    useEffect(() => {
        buscaCredenciais();
    }, []);

    return (
        <Drawer

            open={exibirMenu}
            onClose={event => {
                if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
                onFecharMenu();
            }}
        >
            {/*<CustomToolbar/>*/}
            <div className="drawer_menu___main">
                <div className="logo-header">
                    <img src="http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/logo.png" style={{ width: 60, padding: 8 }} />
                    <Typography className="drawer_menu___titulo" variant="h6">
                        {razaoSocial}
                    </Typography>
                    <Typography variant="body2" gutterBottom style={{ fontWeight: 300 }}>
                        {cnpj}
                    </Typography>
                </div>

                <Divider />

                <MenuItem className="menu-item comprar"
                    color="primary"
                    onClick={() => {
                        comprar();
                    }}>
                    <StoreIcon />
                    <Typography variant="inherit" style={{ marginLeft: 12 }}>Comprar</Typography>
                </MenuItem>

                <Divider />

                <MenuList>
                    <MenuItem className="menu-item"
                        onClick={() => {
                            minhaConta();
                        }}>
                        <AccountCircleOutlinedIcon />
                        <Typography variant="inherit" style={{ marginLeft: 12 }}>Minha Conta</Typography>
                    </MenuItem>

                    <MenuItem className="menu-item" disabled>
                        <AssignmentTurnedInIcon />
                        <Typography variant="inherit" style={{ marginLeft: 12 }}>Meus Pedidos</Typography>
                    </MenuItem>

                    <MenuItem className="menu-item" onClick={() => {
                        logout();
                        onFecharMenu();
                    }}>
                        <ExitToAppIcon />
                        <Typography variant="inherit" style={{ marginLeft: 12 }}>Sair</Typography>
                    </MenuItem>
                </MenuList>
            </div>
        </Drawer>
    );

};

Page.propType = {
    exibirMenu: PropTypes.bool,
    onFecharMenu: PropTypes.func
};

Page.defaultProps = {
    exibirMenu: false,
    onFecharMenu: () => {
    }
};


export default Page;