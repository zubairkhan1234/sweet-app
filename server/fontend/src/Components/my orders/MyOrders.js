import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from '../Url/BaseURL'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 70,
        height: 60,
    },
    media: {
        height: 100,
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
        width: "15%",
        textAlign: 'center',
        margin: '0px'
    }
}));



export default function MyOrders() {
    const classes = useStyles()


    const [order, setOrder] = useState([])


    useEffect(() => {

        axios({
            method: "get",
            url: BaseURL + '/myorders',
            withCredentials: true
        })
            .then(function (response) {
                console.log(response.data)
                if (response.status === 200) {
                    setOrder(response.data.data)
                }
            })
            .catch(function (response) {
                console.log(response)
            })

    }, [])


    console.log(order)

    const removeFromCart = (productToRemove) => {
        setorder(
            order.filter((product) => product !== productToRemove)
        );
    };
    
    // function myGeeks(product) { 
    //     var theDate = new Date(Date.parse( 
    //         product.createdOn)); 

    //     document.getElementById("demo") 
    //         .innerHTML = "Local date Time: " 
    //         + theDate.toLocaleString(); 
    // } 


    return (
        <div style={{ margin: 20 }}>

            <h1>This is my all order</h1>
            <div maxWidth="xl">
                <div>
                    {order.map((product, idx) => {
                        return <div style={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 }} key={idx} value={product.id}>


                            {/* <h1>Order Detail</h1>
                            <div style={{ margin: "15px", display: 'flex', justifyContent: 'space-between', height: 70 }}>
                                <div className={classes.header}><h2>Image</h2></div>
                                <div className={classes.header}><h2>Sweet Name</h2></div>
                                <div className={classes.header}><h2>sweet description</h2></div>
                                <div className={classes.header}><h2>Sweet Price</h2></div>
                                <div className={classes.header}><h2>Sweet Quantity in kg</h2></div>
                                <div className={classes.header}><h2>total</h2></div>
                            </div> */}

                            <div>
                                Name:  {product.createdOn}
                            </div> <br />
                            {/* <div onChange={() => myGeeks(product)}>
                            {myGeeks()}
                            </div> <br /> */}

                            {
                                product.orders.map((order, index) => {
                                    {/* console.log(order) */ }

                                    return (
                                        <>
                                            <div key={index} value={order.id}  >

                                                <div style={{ margin: "0px", display: 'flex', justifyContent: 'space-between', textAlign: 'center', height: 70 }}>

                                                    <div className={classes.header} >
                                                        <img
                                                            className={`products ${classes.root}`}
                                                            src={order.cartimage}
                                                            alt={order.cartimage}
                                                        />
                                                    </div>
                                                    <div className={classes.header}>
                                                        <span style={{ lineHeight: "100px", padding: "10px" }} gutterBottom variant="h5" id="title" component="h2">
                                                            {order.title}
                                                        </span>
                                                    </div>
                                                    <div className={classes.header}>
                                                        <span style={{ lineHeight: "100px", padding: "10px" }} gutterBottom variant="h5" id="title" component="h2">
                                                            {order.description}
                                                        </span>
                                                    </div>
                                                    <div className={classes.header}>
                                                        <span style={{ lineHeight: "100px", padding: "10px" }} id="price" variant="body2" component="h2">
                                                            {order.price}
                                                        </span>
                                                    </div>
                                                    <div className={classes.header}>
                                                        <span style={{ lineHeight: "100px", padding: "10px" }} id="price" variant="body2" component="h2">
                                                            {order.quantity}kg
                                                        </span>

                                                    </div>
                                                    <div className={classes.header}>
                                                        <span style={{ lineHeight: "100px", padding: "10px" }} id="price" variant="body2" component="h2">
                                                            {order.quantity * order.price}
                                                        </span>

                                                    </div>

                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }


                            {/* <h1>Reciever Detail</h1>
                            <div style={{ padding: 20, textAlign: 'left'  }} >
                                <div>
                                    Name:  {product.name}
                                </div> <br />
                                <div>
                                    Phone Number:  {product.phone}
                                </div> <br />
                                <div>
                                    Email: {product.email}
                                </div> <br />
                                <div>
                                    Address: {product.address}
                                </div> <br />
                                <div>
                                    {product.total}
                                </div> <br />
                                <div>
                                    <button size="small" onClick={() => removeFromCart(product)} color="primary">
                                        Accept Order
                                    </button>
                                    <button size="small" onClick={() => removeFromCart(product)} color="primary">
                                        Remove Order
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    })}



                </div>
            </div>
        </div>
    )
}
