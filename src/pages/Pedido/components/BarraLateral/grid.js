import React, {useContext} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useState} from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import BallotIcon from '@material-ui/icons/Ballot';

import './index.css';
import Page from '../TabelaMercadoria/mercadorias';
import Contexto from '../../../App/context';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        width: 80,
    },
    menuitem: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    }
}));

const dados = [
    {
        marca: "bananaboat",
        src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/bananaboat.png"
    },
    {marca: "bozzano", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/bozzano.png"},
    {marca: "dentil", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/dentil.png"},
    {marca: "energizer", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/energizer.png"},
    {marca: "eveready", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/eveready.png"},
    {marca: "fructis", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/fructis.png"},
    {marca: "isababy", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/isababy.png"},
    {marca: "isacare", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/isacare.png"},
    {marca: "shick", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/schick.png"},
    {marca: "starlux", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/starlux.png"},
    {marca: "trim", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/trim.png"},
    {marca: "winner", src: "http://www.arcom.com.br/wp-content/themes/wp-arcom/assets/images/marcas/winner.png"}
];

export default function CenteredGrid() {

    const classes = useStyles();
    const {buscaMercadoria} = useContext(Contexto);

    const [filtroCarrinho, setFiltroCarrinho] = useState(false);
    const [filtroReposicao, setFiltroReposicao] = useState(false);

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={2}>
                    <Paper className={classes.paper}>
                        <div>
                            <Typography variant="overline" display="block" gutterBottom>
                                Filtros rápidos
                            </Typography>
                            <MenuList className="pedido-barra-lateral___filtro_rapido">
                                <MenuItem 
                                    selected={filtroCarrinho} 
                                    style={{color: filtroCarrinho ? "royalblue" : "inherit"}}
                                    onClick={() => {
                                        setFiltroCarrinho(!filtroCarrinho)
                                        setFiltroReposicao(!filtroCarrinho ? false : filtroReposicao)
                                        buscaMercadoria(!filtroCarrinho ? 'carrinho' : '')
                                }}>
                                    <ShoppingBasketIcon fontSize="small"/>
                                    <Typography variant="inherit" style={{width: "100%", marginLeft: 12}}>Carrinho</Typography>
                                    {filtroCarrinho && (<HighlightOffIcon fontSize="small"/>)}
                                </MenuItem>
                                {/* <MenuItem 
                                    selected={filtroReposicao} 
                                    style={{color: filtroReposicao ? "royalblue" : "inherit"}}
                                    onClick={() => {
                                        setFiltroReposicao(!filtroReposicao)
                                        setFiltroCarrinho(!filtroReposicao ? false: filtroCarrinho)
                                        buscaMercadoria(!filtroReposicao ? 'reposicao' : '')
                                }}>
                                    <BallotIcon fontSize="small"/>
                                    <Typography variant="inherit" style={{width: "100%", marginLeft: 12}}>Compra Rápida</Typography>
                                    {filtroReposicao && (<HighlightOffIcon fontSize="small"/>)}
                                </MenuItem> */}
                            </MenuList>

                            <br/>
                            <Divider/>
                            <br/>

                            <Typography variant="overline" display="block" gutterBottom>
                                Filtro por marcas
                            </Typography>
                            <MenuList className="menu-list">
                                {dados.map((row) => (
                                    <MenuItem 
                                        key={row.marca}
                                        className="menu-list-item"
                                        onClick={() => {
                                            buscaMercadoria(row.marca)
                                    }}>
                                        <div key={row.marca} className="menu-list-item">
                                            <img className={classes.img} alt={row.marca} src={row.src}/>
                                        </div>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={10}>
                    <Page/>
                </Grid>
            </Grid>
        </div>
    );
}