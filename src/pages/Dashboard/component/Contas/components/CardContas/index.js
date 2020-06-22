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
import Grid from "@material-ui/core/Grid";

const contas = [
    {
        'id': 1,
        'descricao': 'conta1',
        'disponivel': 1.500
    },
    {
        'id': 2,
        'descricao': 'conta2',
        'disponivel': 1.000
    },
    {
        'id': 3,
        'descricao': 'conta3',
        'disponivel': 500
    },
    {
        'id': 4,
        'descricao': 'conta4',
        'disponivel': 500
    },
    {
        'id': 5,
        'descricao': 'conta5',
        'disponivel': 500
    },
    {
        'id': 6,
        'descricao': 'conta5',
        'disponivel': 500
    },
    {
        'id': 7,
        'descricao': 'conta5',
        'disponivel': 500
    },
];

const CardContas = () => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
                {
                    contas.map(conta => (
                        <Card className={classes.root}>
                            <CardHeader key={conta.id}
                                        avatar={
                                            <Avatar key={conta.id} aria-label="recipe" className={classes.avatar}>
                                                $
                                            </Avatar>
                                        }
                                        title={conta.descricao}
                                        subheader={`R$ ${conta.disponivel}`}
                            />
                            <CardActions disableSpacing>
                                <Typography>
                                    Lançamentos
                                </Typography>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent key={conta.id}>
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
                    ))
                }
        </>

    );
}

export default CardContas;