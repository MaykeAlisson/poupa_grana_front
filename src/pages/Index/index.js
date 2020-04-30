import React from 'react';
import {Fragment} from 'react';

import './index.css';
import BarraNavegacao from './components/BarraNavegacaoIndex';
import Main from './components/Main';

const Home = () => {

    return(
        <Fragment>
            <BarraNavegacao/>
            <Main/>
        </Fragment>
    );
};

export default Home;