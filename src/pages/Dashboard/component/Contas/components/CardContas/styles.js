import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            width: 300,
            margin: '10px',
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: "green",
    },
}));