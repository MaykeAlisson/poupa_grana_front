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
import {useState} from "react";

const contas = [
    {
        'id': 1,
        'descricao': 'conta1',
        'porcentagem': 30,
        'disponivel': 1.500
    },
    {
        'id': 2,
        'descricao': 'conta2',
        'porcentagem': 20,
        'disponivel': 1.000
    },
    {
        'id': 3,
        'descricao': 'conta3',
        'porcentagem': 5,
        'disponivel': 500
    },
    {
        'id': 4,
        'descricao': 'conta4',
        'porcentagem': 5,
        'disponivel': 500
    },
    {
        'id': 5,
        'descricao': 'conta5',
        'porcentagem': 5,
        'disponivel': 500
    },
    {
        'id': 6,
        'descricao': 'conta5',
        'porcentagem': 5,
        'disponivel': 500
    },
    {
        'id': 7,
        'descricao': 'conta5',
        'porcentagem': 5,
        'disponivel': 500
    },
];

const CardContas = () => {
    const classes = useStyles();

    const [openId, setOpenId] = useState(null);
        
    const handleExpandClick = (id) => {
        if (id === openId) {
            setOpenId(null);
            return;
        }
        setOpenId(id);
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
                                        subheader={`${conta.porcentagem}%`}
                            />
                            <Typography>
                                Disponivel ${conta.disponivel}
                            </Typography>
                            <CardActions disableSpacing>
                                <Typography>
                                    Lançamentos
                                </Typography>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: openId === conta.id,
                                    })}
                                    onClick={ () => {handleExpandClick(conta.id)}}
                                    aria-expanded={openId === conta.id}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={openId === conta.id} timeout="auto" unmountOnExit>
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