import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const CardCredito = () => {
    const classes = useStyles();

    const [abreCard, setAbreCard] = React.useState(false);

    const handleExpandClick = () => {
        setAbreCard(!abreCard);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        $
                    </Avatar>
                }
                title="Credito"
                subheader="R$ 3.000"
            />
            <CardActions disableSpacing>
                <Typography>
                    Lançamentos
                </Typography>
                <IconButton
                    className={clsx(classes.aberto, {
                        [classes.abertoTrue]: abreCard,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={abreCard}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={abreCard} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                    <Typography paragraph>
                        25/06/2020 - Cafe - R$ 2,50
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CardCredito;