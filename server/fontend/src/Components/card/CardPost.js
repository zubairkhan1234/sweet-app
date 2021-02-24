import React from 'react'
import { CardData } from './CardData'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    fontSize: {
        fontSize: 18,
    }
});


export default function CardPost() {

    const classes = useStyles();



    return (
        <React.Fragment>
          
            <Container maxWidth="xl" >
                {CardData.map((card, index) => {
             return <Card key={index} className={classes.root} style={{display:"inline-block", margin: "15px"}} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={card.imageUrl}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button className={classes.fontSize} size="small" color="primary">
                                +
                            </Button>
                            <Button className={classes.fontSize} size="small" color="primary">
                             
                            </Button>
                            <Button className={classes.fontSize} size="small" color="primary">
                                -
                            </Button>
                            <Button size="small" color="primary">
                                Add To Card
                            </Button>
                        </CardActions>
                    </Card>
                })}

            </Container>
        </React.Fragment>

    )
}
