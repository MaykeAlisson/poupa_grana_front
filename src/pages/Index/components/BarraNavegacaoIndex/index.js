import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const BarraNavegacao = () => {
  const classes = useStyles();

  return(
      <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Poupa Grana
          </Typography>
          <Button component={Link} to="/login">Login</Button>
          <Button component={Link} to="/cadastro" color="primary">Cadastrar</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default BarraNavegacao;