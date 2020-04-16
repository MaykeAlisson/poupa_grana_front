import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './index.css';
import Cores from '../../../util/Cores';
import isEmpty from '../../../util/isEmpty';

const Componente = props => {

    const {
        open,
        msgInfo,
        msgSucesso,
        msgAviso,
        msgErro,
        msgFromObj,
        onClose,
        posicionarNoTopo,
        modal
    } = props;

    let mensagem = '???';
    let Icon = NotificationImportant;
    let backgroundColor = Cores.msgIndefinido;
    let fontColor = Cores.branco; // Apenas p/ não modal!!

    if (msgErro) {
        mensagem = extrairMsgAPI(msgErro);
        Icon = ErrorIcon;
        backgroundColor = Cores.msgErro;
    } else if (msgAviso) {
        mensagem = extrairMsgAPI(msgAviso);
        Icon = WarningIcon;
        backgroundColor = Cores.msgAviso;
        fontColor = Cores.preto;
    } else if (msgSucesso) {
        mensagem = extrairMsgAPI(msgSucesso);
        Icon = CheckCircleIcon;
        backgroundColor = Cores.msgSucesso;
    } else if (msgInfo) {
        mensagem = extrairMsgAPI(msgInfo);
        Icon = InfoIcon;
        backgroundColor = Cores.msgInfo;
    } else if (msgFromObj) {
        if (msgFromObj.hasOwnProperty('stack') && msgFromObj.hasOwnProperty('message')) {
            mensagem = msgFromObj.message;
            if (isEmpty(msgFromObj.stack)) {
                Icon = WarningIcon;
                backgroundColor = Cores.msgAviso;
                fontColor = Cores.preto;
            } else {
                Icon = ErrorIcon;
                backgroundColor = Cores.msgErro;
            }
        } else if (msgFromObj.hasOwnProperty('message')) {
            mensagem = msgFromObj.message;
            Icon = ErrorIcon;
            backgroundColor = Cores.msgErro;
        } else {
            mensagem = msgFromObj;
            Icon = ErrorIcon;
            backgroundColor = Cores.msgErro;
        }
    }

    const anchorOrigin = {
        vertical: (posicionarNoTopo ? 'top' : 'bottom'),
        horizontal: 'left'
    };

    if (modal)
        return (
            <Snackbar
                anchorOrigin={anchorOrigin}
                open={open}
                onClose={onClose}
            >
                <SnackbarContent
                    style={{backgroundColor: backgroundColor}}
                    aria-describedby='client-snackbar'
                    message={
                        <span
                            id='client-snackbar'
                            className='custom-msg-modal'
                        >
                            <Icon className='custom-msg-icone' />
                            {mensagem}
                        </span>
                    }
                    action={[
                        <IconButton
                            key='close'
                            aria-label='Close'
                            color='inherit'
                            onClick={onClose}
                        >
                            <CloseIcon className='custom-msg-icone' />
                        </IconButton>
                    ]}
                />
            </Snackbar>
        );

    return (
        open &&
        <div
            style={{backgroundColor: backgroundColor}}
            className='custom-msg-no-modal'
        >
            <IconButton
                key='close'
                aria-label='Close'
                color='inherit'
                onClick={onClose}
            >
                <CloseIcon className='custom-msg-icone' />
            </IconButton>
            <Typography
                variant='body2'
                gutterBottom
                style={{color: fontColor}}
            >
                {mensagem}
            </Typography>
        </div>
    );

};

const extrairMsgAPI = msg => msg.message ? msg.message : msg;

Componente.propType = {
    open: PropTypes.object.isRequired,
    msgInfo: PropTypes.string,
    msgSucesso: PropTypes.string,
    msgAviso: PropTypes.string,
    msgErro: PropTypes.string,
    onClose: PropTypes.func,
    posicionarNoTopo: PropTypes.bool,
    modal: PropTypes.bool
};

Componente.defaultProps = {
    open: false,
    msgInfo: '',
    msgSucesso: '',
    msgAviso: '',
    msgErro: '',
    onClose: () => {},
    posicionarNoTopo: false,
    modal: true
};

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

export default withStyles(styles)(Componente);