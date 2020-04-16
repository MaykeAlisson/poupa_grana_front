import React from 'react';

import './styles.css';
import Cliente from './components/Cliente';
import CenteredGrid from './components/BarraLateral/grid';
import {Container} from '@material-ui/core';


const Pedido = () => {


    return (
        <div style={{marginTop:10}}>
            <Container>
                <CenteredGrid style={{marginTop: 20}}/>
            </Container>
        </div>
    );
};

export default Pedido;