import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            width: 300,
            margin: '10px',
        },
    },
    aberto: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    abertoTrue: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "green",
    },
}));