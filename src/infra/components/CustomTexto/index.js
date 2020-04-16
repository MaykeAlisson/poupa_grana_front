import React from 'react';
import Typography from '@material-ui/core/Typography';

const Componente = ({
    tag,
    children,
    style
}) => (
    <Typography 
        variant={tag} 
        gutterBottom
    >
        {children}
    </Typography>
);

Componente.defaultProps = {
    tag: 'overline',
    style: {}
};

export default Componente;