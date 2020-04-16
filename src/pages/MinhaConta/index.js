import React, { useContext } from 'react';
import './styles.css';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Contexto from '../App/context';
import { Divider, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MinhaConta() {
  const [value, setValue] = React.useState(0);

  const { razaoSocial, cnpj, endereco } = useContext(Contexto);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-main">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Cadastro" {...a11yProps(0)} />
        <Tab label="Meus Pedidos" disabled {...a11yProps(1)} />
      </Tabs>
      <div className="tabs-main">
        <TabPanel value={value} index={0}>
          <Paper elevation={1} className="tabs-paper">
            <Typography variant="h5" component="h2">
              EDSONIA ALVES DE OLIVEIRA & CIA LTDA
            </Typography>
            <Typography color="textSecondary">
              {razaoSocial}
              <br />
              {cnpj}
              <br />
              {endereco}
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography variant="body2" component="p">
              <b>Email:</b> supermercadocampeaoudi@gmail.com
              <br />
              <b>Data do último pedido:</b> 08/04/2020
              <br />
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Meus pedidos...
        </TabPanel>

        <div style={{textAlign: "center"}}>
          <Button
            variant="contained"
            size="large"
            className="button"
            component={Link}
            to="/pedido"
            startIcon={<AddShoppingCartIcon />}
          >
            Fazer novo pedido
        </Button>
      </div>
      </div>
    </div>
  );
};

