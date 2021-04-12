import {
    Card, 
    CardContent,
    CardActions,
    Button, 
    Typography,
    Link
        } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { useStyle } from './styles'

export default function CardGruop(){

    const id = "50";

    const classes = useStyle;

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4">Grupo 1</Typography>
                <Typography variant="h5">Superintendente: Jorge Hachar</Typography>
                <br/>
                <Typography variant="p">Auxiliar: Jose Rodriguez</Typography>
                <br/>
                <Typography variant="p">Total publicadores: 12</Typography>
            </CardContent> 
            <CardActions>
                <Button size="small">
                    <Link component={ RouterLink } to={`/app/grupos${id}`} >
                        Ver integrantes
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )

}

CardGruop.propTypes = {
    grupo: PropTypes.string
}

