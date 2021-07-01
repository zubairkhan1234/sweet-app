import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BaseURL from '../Url/BaseURL';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Table } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import { UseGlobalState, UseGlobalStateUpdate } from '../../context/context'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 70,
    height: 60,
    [theme.breakpoints.down('xs')]: {
      width: 30,
      height: 25,
    }
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
    margin: '0px',
    [theme.breakpoints.down('xs')]: {
      width: "auto",
      textAlign: 'center',
      margin: '0px',
    },
    [theme.breakpoints.down('md')]: {
      width: "auto",
      textAlign: 'center',
      margin: '0px',
    }
  },
  heading: {
    [theme.breakpoints.down('xs')]: {
      display: "none"
    }
  },
  forFont: {
    lineHeight: "100px",
    [theme.breakpoints.down('xs')]: {
      lineHeight: "30px",
      paddingLeft: "3px",
    }
  },
  border1: {
    border: '2px solid #3f51b5', borderRadius: '10px',
  },
  border2: {
    border: '2px solid #3f51b5',
    backgroundColor: '#bacaff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      margin: 6,
      padding: 20,
      borderRadius: 5,

    }
  },
  display: {
    lineHeight: "100px",
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  button: {
    margin: '20px',
    backgroundColor: '#3f51b5',
    border: 'none', padding: '10px',
    borderRadius: '4px',
    color: '#ffff',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 15px 0px 0px',
      backgroundColor: '#3f51b5',
      border: 'none', padding: '10px',
      borderRadius: '4px',
      color: '#ffff',
    }
  },
  headingArea: {
    margin: "15px",
    display: 'flex',
    justifyContent: 'space-between',
    height: 70,
    [theme.breakpoints.down('xs')]: {
      height: 0,
    }
  },
  detailArea: {
    padding: 20,
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      padding: 3,

    }
  },
  headerHeading: {
    marginTop: '7%',
    marginBottom: '2%',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 600,
    textShadow: '5px 5px 5px #758287',
    color: '#3f51b5',
    [theme.breakpoints.down('md')]: {
      marginTop: '9%',
      marginBottom: '2%',
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: 600,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '11%',
      marginBottom: '2%',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 600,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '22%',
      marginBottom: '5%',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 600,
    }
  }
}));


export default function DeletedOrder() {
  const globalState = UseGlobalState()
  const globalStateUpdate = UseGlobalStateUpdate()

  const classes = useStyles()

  const [order, setorder] = useState([])

  useEffect(() => {

    axios({
      method: "get",
      url: BaseURL + '/admin/getorders/rejected',
      withCredentials: true
    })
      .then(function (response) {

        if (response.status === 200) {
          // console.log(response.data.data)
          // console.log("lkdflasdfkj ", response.data.data)
          setorder(response.data.data)

        }
      })
      .catch(function (error) {
        console.log(error)

      })
  }, [])


  // const AcceptOrder = (product) => {


  //   axios({
  //     method: "post",
  //     url: BaseURL + '/admin/getorders/updatestatus',
  //     data: {
  //       id: product._id,
  //       status: 'Your Order Accepeted'
  //     },
  //     withCredentials: true
  //   })
  //     .then(function (response) {

  //       if (response.status === 200) {
  //         // console.log(response.data.data)
  //         // console.log("lkdflasdfkj ", response.data.data)
  //         console.log(response.data.message)
  //         alert(response.data.message)

  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error)

  //     })

  // }


  // const removeFromCart = (productToRemove) => {


  //   axios({
  //     method: 'post',
  //     url: BaseURL + '/order/rejected',
  //     data: {
  //       id: productToRemove._id,
  //       rejectedProduct: productToRemove
  //     },
  //     withCredentials: true
  //   }).then(function (response) {
  //     if (response.status === 200) {
  //       alert(response.data.message)
  //     } else {
  //       alert(response.data.message)
  //     }
  //     console.log("dfjasl", response)

  //   }).catch(function (err) {
  //     alert(err)
  //     console.log(err)

  //   })


  //   setorder(
  //     order.filter((product) => product !== productToRemove)
  //   );
  // };

  console.log(globalState)
  console.log(order)

  return (
    <div style={{ margin: 20 }}>
      hello
      <div maxWidth="xl">
        <div className={classes.headerHeading}>
          <span >All Order With Reciever detail</span>
        </div>
        <div className={classes.border1}>
          {order.map((product, idx) => {
            return <div key={idx} className={classes.border2} key={idx} value={product.id}>
              <h1>Order Detail</h1>
              <div className={classes.headingArea}>
                <div className={classes.header}><h4 className={classes.heading}>Image</h4></div>
                <div className={classes.header}><h4 className={classes.heading}>Sweet Name</h4></div>
                <div className={classes.header}><h4 className={classes.heading}>sweet description</h4></div>
                <div className={classes.header}><h4 className={classes.heading}>Sweet Price</h4></div>
                <div className={classes.header}><h4 className={classes.heading}>Sweet Quantity in kg</h4></div>
                <div className={classes.header}><h4 className={classes.heading}>total</h4></div>
              </div>
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
                            <span className={classes.forFont} variant="h5" id="title" component="h2">
                              {order.title}
                            </span>
                          </div>
                          <div className={classes.header}>
                            <span className={classes.display} variant="h5" id="title" component="h2">
                              {order.description}
                            </span>
                          </div>
                          <div className={classes.header}>
                            <span className={classes.forFont} id="price" variant="body2" component="h2">
                              {order.price}
                            </span>
                          </div>
                          <div className={classes.header}>
                            <span className={classes.forFont} id="price" variant="body2" component="h2">
                              {order.quantity}kg
                            </span>

                          </div>
                          <div className={classes.header}>
                            <span className={classes.forFont} id="price" variant="body2" component="h2">
                              {order.quantity * order.price}
                            </span>

                          </div>

                        </div>
                      </div>

                    </>
                  )
                })
              }
              <h1>Reciever Detail</h1>
              <div key={idx} className={classes.detailArea} >
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
                {/* <div>
                  <button
                    className={classes.button}
                    size="small" onClick={() => AcceptOrder(product)} color="primary">
                    Accept Order
                  </button>
                  <button
                    className={classes.button}
                    size="small" onClick={() => removeFromCart(product)} color="primary">
                    Remove Order
                  </button>
                </div> */}
                <h2>{product.status}</h2>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
