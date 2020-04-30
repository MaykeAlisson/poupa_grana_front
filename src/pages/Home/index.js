import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {useHistory} from 'react-router-dom';

import './styles.css';

export default () => {

    const history = useHistory();

    return (
        <div className='home___man'>
            <ButtonGroup className='home___opcao' size="large" aria-label="large outlined button group">
                <Button
                    className='home___opcao___titulo'
                    component={Link}
                    to='/pedido'
                >COMPRAR</Button>
                <Button className='home___opcao___titulo'>MEUS PEDIDOS</Button>
                <Button className='home___opcao___titulo'>2&deg; VIA BOLETO</Button>
            </ButtonGroup>
        </div>
    );

};