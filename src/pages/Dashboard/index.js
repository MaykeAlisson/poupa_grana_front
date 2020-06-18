import React from 'react';
import {Route, Switch} from "react-router-dom";
import {useHistory} from "react-router-dom";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useTheme from "@material-ui/core/styles/useTheme";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PersonIcon from '@material-ui/icons/Person';
import BallotIcon from '@material-ui/icons/Ballot';
import TimelineIcon from '@material-ui/icons/Timeline';
import InfoIcon from '@material-ui/icons/Info';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

import useStyles from './styles';
import Home from "./component/Home";
import Profile from "./component/Profile";
import Contas from "./component/Contas";
import Balanco from "./component/Balanco";
import Objetivos from "./component/Objetivos";
import Configuracoes from "./component/Configuracoes";
import Informacoes from "./component/Informacoes";

function ResponsiveDrawer(props) {
    const classes = useStyles();
    let history = useHistory();

    const {window} = props;
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{backgroundColor: '#F8F8FF'}}>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button key={1} onClick={() => {
                    history.push("/");
                }}>
                    <ListItemIcon> <HomeIcon/> </ListItemIcon>
                    <ListItemText primary='Home'/>
                </ListItem>
                <ListItem button key={2} onClick={() => {
                    history.push("/contas");
                }}>
                    <ListItemIcon> <AccountBalanceWalletIcon/> </ListItemIcon>
                    <ListItemText primary='Minhas Contas'/>
                </ListItem>
                <ListItem button key={3} onClick={() => {
                    history.push("/balanco");
                }}>
                    <ListItemIcon> <TimelineIcon/> </ListItemIcon>
                    <ListItemText primary='Balanço'/>
                </ListItem>
                <ListItem button key={4} onClick={() => {
                    history.push("/objetivos");
                }}>
                    <ListItemIcon> <BallotIcon/> </ListItemIcon>
                    <ListItemText primary='Objetivos'/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button key={5} onClick={() => {
                    history.push("/perfil");
                }}>
                    <ListItemIcon> <PersonIcon/> </ListItemIcon>
                    <ListItemText primary='Perfil'/>
                </ListItem>
                <ListItem button key={6} onClick={() => {
                    history.push("/configuracoes");
                }}>
                    <ListItemIcon> <ConfirmationNumberIcon/> </ListItemIcon>
                    <ListItemText primary='Configurações'/>
                </ListItem>
                <ListItem button key={7} onClick={() => {
                    history.push("/informacoes");
                }}>
                    <ListItemIcon> <InfoIcon/> </ListItemIcon>
                    <ListItemText primary='Informações'/>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="abrir Menu"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Poupa Grana
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="Usuario">
                            <AccountCircle/>
                        </IconButton>
                        <p>Usuario</p>
                        <IconButton aria-label="Sair" onClick={() => {
                            props.onLogoutSuccess();
                        }}>
                            <ExitToAppIcon className={classes.iconeSair}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/contas' exact component={Contas}/>
                    <Route path='/balanco' exact component={Balanco}/>
                    <Route path='/objetivos' exact component={Objetivos}/>
                    <Route path='/perfil' exact component={Profile}/>
                    <Route path='/configuracoes' exact component={Configuracoes}/>
                    <Route path='/informacoes' exact component={Informacoes}/>
                    <Route component={Home}/>
                </Switch>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
