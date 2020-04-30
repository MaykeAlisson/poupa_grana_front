import React from 'react';
import {Container} from '@material-ui/core';

import './styles.css';
import Geral from './components/BarraLateral';
// import imgbanner2 from '../../../public/images/starlux02.jpg'

const Componente = () => {

    return (
        <div style={{marginTop:10}}>
            {/*<img src={imgbanner2} style={{width: "100%", marginTop: "-24px", marginBottom: "20px"}}/>*/}
            <Container>
                <Geral style={{marginTop: 20}}/>
            </Container>
        </div>
    );
};

export default Componente;