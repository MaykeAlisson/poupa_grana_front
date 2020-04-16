import React from 'react';
import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import './styles.css';

export default ({
    children,
    onClickMenu
}) => {

    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar
                    position='static'
                    className="appbar"
                >
                    <Container>
                        <Toolbar variant='dense'>
                            <IconButton
                                edge='start'
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='menu'
                                onClick={onClickMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className="titulo">
                                ARCOM
                            </Typography>
                            {children}
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            <Toolbar style={{ minHeight: '80px' }} />
         </Fragment>
    )
};