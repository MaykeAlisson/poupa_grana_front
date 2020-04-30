import React from 'react';
import {useState} from 'react';
import { Container, Grid, Button } from '@material-ui/core';

import Tabela from './components/TabelaCheckout';
import Checkout from './components/Checkout';
import {Link} from 'react-router-dom'

const Componente = props => {
  
  const [updateState, setState] = useState(false);
  
  const forceUpdate = () => {
    setState(!updateState);
  };
  
  return (
    <div style={{ fontFamily: "Raleway" }}>

      <Container style={{ padding: 30 }}>

        <Button 
          variant="outlined"
          component={Link} 
          to="/pedido">← Continuar comprando</Button>
        
        <Grid container spacing={3} style={{marginTop:20}}>
          <Grid item xs={12} md={7} >
            <Tabela 
              onChange={() => {
                forceUpdate();
              }}/>
          </Grid>
          <Grid item xs={12} md={5}>
            <Checkout />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Componente;