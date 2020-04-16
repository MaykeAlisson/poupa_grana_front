import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        background: "white",
        width: "100%",
        zIndex: 99
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));