import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Pedido from './pages/Pedido';
import FinalizaPedido from './pages/FinalizaPedido'
import MinhaConta from './pages/MinhaConta'

export default () => (
    <Switch>
        <Route path='/' exact component={Pedido} />
        {/*<Route path='/login' exact component={Login} />*/}
        <Route path='/pedido' exact component={Pedido} />
        <Route path='/finaliza-pedido' exact component={FinalizaPedido} />
        <Route path='/minha-conta' exact component={MinhaConta} />
        <Route component={Home} />
    </Switch>
)