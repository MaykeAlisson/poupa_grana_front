import React, {useContext} from 'react';

import { Button, Paper, Typography, List, ListItem, ListItemText, Divider, Grid, Avatar, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Contexto from '../../../App/context';
import {useEffect} from "react";

export default function Checkout() {

  const [open, setOpen] = React.useState(false);
  const {valorTotalDoPedido, prazoEntrega, razaoSocial, cnpj, endereco, enviaPedido, buscaCredenciais} = useContext(Contexto);
  const vlrTotal = valorTotalDoPedido().toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  useEffect(() => {
    buscaCredenciais();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const enviarPedido = () => {
    enviaPedido();
    handleClose();
  };

  return (
    <div>
      <Paper elevation={5} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 100, marginLeft: 12 }}>
          Checkout
        </Typography>
        <Grid container direction="column" style={{padding:16}}>
          <Grid item xs>
            <Typography variant="body1" gutterBottom >
              {razaoSocial}
            </Typography>
            <Typography variant="body2" gutterBottom style={{fontWeight:300}}>
              {cnpj}
            </Typography>
            <Typography variant="body2" gutterBottom style={{fontWeight:300}}>
              {endereco}
            </Typography>
          </Grid>
        </Grid>
        <List component="nav" >
          <ListItem>
            <FormControl style={{width:"100%"}}>
              <InputLabel id="demo-simple-select-label">PRAZO DE PAGAMENTO</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={20}>
                <MenuItem value={20}>35 Dias</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemText secondary="VALOR TOTAL" />
            <ListItemText align="right">
              <span style={{ fontWeight: 600 }}>R$ {vlrTotal}</span>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText secondary="ENTREGA ARCOM" />
            <ListItemText align="right">
              <span style={{ fontWeight: 600 }}>{prazoEntrega} Dias úteis</span>
            </ListItemText>
          </ListItem>
          <Divider />
          
        </List>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          disabled={vlrTotal == "0,00"}
          style={{ marginTop: 24, backgroundColor: "#028743" }}
          onClick={handleClickOpen}>
          Enviar Pedido
        </Button>

        <Paper style={{backgroundColor: "#CCEEFF", padding:20, marginTop:20}} elevation={0}>
          <Grid container 
            wrap="nowrap" 
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item>
              <InfoIcon color="primary"/>
            </Grid>
            <Grid item xs style={{textAlign:"center"}}>
              <Typography variant="body2" style={{marginLeft:20, marginRight:20}}>Em caso de dúvidas, entre em contato com o Arcom pelo telefone 0800 122 202</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Paper>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, informe seu nome e o melhor telefone com DDD.
            <br/><br/>
            Nossos consultores de vendas entrarão em contato com você para confirmar o pedido.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth/>
          <br/><br/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Telefone"
            placeholder="(11) 99999 8765"
            name="phone"
            type="text"
            fullWidth
            inputProps={{
              maxLength: 15,
            }}
          />
          <br/><br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={enviarPedido} color="primary" variant="contained">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};