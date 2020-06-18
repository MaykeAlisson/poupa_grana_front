import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            // display: 'flex',
        },
    },
    card: {
        // webkitBoxShadow: '9px 7px 5px rgba(50, 50, 50, 0.77)',
        // mozBoxShadow:    '9px 7px 5px rgba(50, 50, 50, 0.77)',
        // boxShadow:         '9px 7px 5px rgba(50, 50, 50, 0.77)',
        [theme.breakpoints.up('md')]: {
            width: '300px',
            height: '400px',
        },
    },

}));