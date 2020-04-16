import React from 'react';

import './index.css';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function CustomizedInputBase() {

  return (
    <div className="root">
      <InputBase
        autoFocus
        className="input-pesquisa"
        placeholder="Pesquisar mercadorias"
        inputProps={{ 'aria-label': 'pesquisar mercadoria' }}
      />
      <IconButton type="submit" className="icon-button" aria-label="search">
        <SearchIcon />
      </IconButton>
      
      
    </div>
  );
}
