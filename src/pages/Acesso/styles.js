import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    fullPage: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        background: '#778899'
    }

}));

