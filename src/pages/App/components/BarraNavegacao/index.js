import React from 'react';
import {useContext} from 'react';
import {useState} from "react";
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


import './index.css';
import Toolbar from 'Components/CustomToolbar';
import Btn from 'Components/CustomBtn';
import Icone from 'Icons/CustomIconCarrinhoCompra';
import Contexto from '../../context';
import MenuLateral from './MenuLateral';
import PesquisaMercadoria from './PesquisaMercadoria';
import comCustomLoading from "../../../../infra/components/CustomLoading";
import comCustomMsg from "../../../../infra/components/CustomMsg";
import isEmpty from '../../../../infra/util/isEmpty';


const Componente = props => {

    const {qtdProdutosLista, salvaCarrinho } = useContext(Contexto);
    const [exibirMenu, setExibirMenu] = useState(false);
    const history = useHistory();

    return (
        <Toolbar onClickMenu={() => setExibirMenu(true)}>
            <MenuLateral
                exibirMenu={exibirMenu}
                onFecharMenu={() => setExibirMenu(false)}
                onLogout={() => props.onLogoutSuccess()}
            />

            <PesquisaMercadoria/>

            <Divider style={{height: 28, marginLeft: 12}} orientation="vertical" />
            <IconButton className="icon-button" component={Link} to="/minha-conta">
                <AccountCircleOutlinedIcon />
            </IconButton>

            {
                qtdProdutosLista > -1 &&
                (
                    <Btn
                        className="btn-fechar-pedido"
                        onClick={() => {
                            props.loading(true);
                            salvaCarrinho( (msg) => {
                                props.loading(false);
                                props.msgFromObj(msg);
                                if (isEmpty(msg)) {
                                    history.push('/finaliza-pedido');
                                }
                            });
                        }}
                        estilo="outlined"
                        icone={<Icone/>}
                        style={{color: "white", borderColor: "white"}}
                    >
                        {qtdProdutosLista}
                    </Btn>
                )
            }
        </Toolbar>
    )
};

export default comCustomLoading(comCustomMsg(Componente));