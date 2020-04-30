import React from 'react';
import {Fragment} from 'react';

import './index.css';
import carteira from '../../../../../public/images/carteira.svg';
import direcao from '../../../../../public/images/direcao.svg';
import praia from '../../../../../public/images/praia.svg';

const main = () => {
  return (
    <Fragment>
      <div className="index-capa">
        <div className="index-capa___texto">
          <h1>Viva uma vida epica</h1>
        </div>
      </div>
      <div className="index-session___funcionalidades">
        <div className='index-session___funcionalidade___carteira'>
          <img className="funcionalidade___img-carteira" src={carteira} alt="Carteira" />
          <h3>Finanças</h3>
          <span>Redesenhe a sua vida </span>
        </div>
        <div className='index-session___funcionalidade___direcao'>
          <img className="funcionalidade___img-direcao" src={direcao} alt="Direção" />
          <h3>Direção</h3>
          <span>Você e o senhor 
          </span>
          </div>
          <div className='index-session___funcionalidade___praia'>
          <img className="funcionalidade___img-praia" src={praia} alt="Aproveite" />
          <h3>Aproveite</h3>
          <span>Você e o senhor 
          </span>
        </div>
      </div>
    </Fragment>
  )
}

export default main;