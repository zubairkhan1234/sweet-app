import React, {useState, useEffect} from 'react'
// import { CardData } from './CardData'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'



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
    const [products, setProducts] = useState([])
    const [count, setcount] = useState(0)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/getProducts',
            withCredentials: true
        }).then((response) => {
            console.log(response.data.data)
            setProducts(response.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    ///////////////////////////////
    console.log(products)
    const addd = (card) => {
        // console.log(cartItems)

        // if () {
        //     // setCartItems(
        //     //     products.map((x) =>{

        //     //         if(x._id === product._id) {
                        
        //     //             setcount(count + 1)
                        
        //     //         }
        //     //     })
        //     // );

        // }
    };



    return (
        <React.Fragment>
          
            <Container maxWidth="xl" >
                {products.map((card, index) => {
             return <Card key={index} value={card.id} id={card.id} className={`products ${classes.root}`} style={{display:"inline-block", margin: "15px"}} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={card.cartimage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   {card.description}
                                    
                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {card.price}
                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button className={classes.fontSize} onClick={addd} size="small" color="primary">
                                +
                            </Button>
                            <Button className={classes.fontSize} size="small" color="primary">
                             {count}
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
