import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


export default props => {

    const {
        titulo,
        estilo,
        tipo,
        iconeBotao,
        erro,
        tamanhoMaximo,
        msgErro,
        onClickBotao,
        inputRef
    } = props;

    let propriedades = {};

    if (iconeBotao) {
        propriedades = { 
            ...propriedades, 
            InputProps: {
                endAdornment:
                    <InputAdornment position='end'>
                      <IconButton onClick={onClickBotao}>
                        {iconeBotao}
                      </IconButton>
                    </InputAdornment> 
            }  
        };
    }

    return (
        <TextField
            label={titulo}
            variant={estilo}
            type={tipo}
            maxLength={tamanhoMaximo}
            error={erro}
            helperText={msgErro}
            inputRef={inputRef}
            fullWidth
            {...propriedades}        
            inputProps={{ maxLength: tamanhoMaximo }}
        />
    )   
};