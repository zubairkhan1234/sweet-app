import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from '../Url/BaseURL'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 145,
        height: 100,
    },
    media: {
        height: 200,
    },
    fontSize: {
        fontSize: 18,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    header: {
        width: "20%",
        textAlign: 'center'
    }
}));


export default function Allorders() {
    const classes = useStyles()

    const [order, setorder] = useState([])

    useEffect(() => {

        axios({
            method: "get",
            url: BaseURL + '/getorders',
            withCredentials: true
        })
            .then(function (response) {

                if (response.status === 200) {
                    console.log(response.data.data)
                    console.log("lkdflasdfkj ", response.data.data)
                    setOrder(response.data.data)

                }
            })
            .catch(function (error) {

            })
    }, [])


    return (
        <div>

            <h1>Cart</h1>
            <Container maxWidth="xl" >
                <div style={{ margin: "15px", display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                    <div className={classes.header}><h2>Image</h2></div>
                    <div className={classes.header}><h2>Sweet Name</h2></div>
                    <div className={classes.header}><h2>Sweet Price</h2></div>
                    <div className={classes.header}><h2>Sweet Quantity in kg</h2></div>
                    <div className={classes.header}><h2>action</h2></div>
                </div>
                <div>
                    {order.map((product, idx) => (
                        <Card key={idx} value={product.id}  >    {/* style={{ display: "inline-block", margin: "15px" }} */}
                            <div style={{ margin: "15px", display: 'flex', justifyContent: 'space-between' }}>

                                <div className={classes.header} >
                                    <CardMedia
                                        className={`products ${classes.root}`}
                                        // className={classes.media}
                                        image={product.cartimage}
                                        alt={product.cartimage}
                                        title="Contemplative Reptile"
                                    />
                                </div>
                                <div className={classes.header}>
                                    <Typography style={{ lineHeight: "100px", padding: "10px" }} gutterBottom variant="h5" id="title" component="h2">
                                        {product.name}
                                    </Typography>
                                </div>
                                <div className={classes.header}>
                                    <Typography style={{ lineHeight: "100px", padding: "10px" }} id="price" variant="body2" component="h2">
                                        {product.email}
                                    </Typography>
                                </div>
                                <div className={classes.header}>
                                    <Typography style={{ lineHeight: "100px", padding: "10px" }} id="price" variant="body2" component="h2" onChange={(e) =>
                                        setQuantity(
                                            product,
                                            parseInt(e.target.value)
                                        )
                                    }>
                                        {product.quantity + "kg"}
                                    </Typography>

                                </div>
                                <div className={classes.header}>
                                    <button size="small" onClick={() => removeFromCart(product)} color="primary">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}
