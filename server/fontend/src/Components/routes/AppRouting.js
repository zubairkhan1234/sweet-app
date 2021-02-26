
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import LogoutRequest from '../logout/Logout'
import { UseGlobalState, UseGlobalStateUpdate } from "../../context/context"
import CheckOut from '../checkOut/CheckOut'



import {
    Link,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));



function AppRoute() {

    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate()


    const classes = useStyles();

   

    let history = useHistory()



    return (
        <>
            <form>
                <AppBar position="static">
                    <Toolbar>
                        {(globalState.role === "user") ?
                            <>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> <MenuIcon /> </IconButton>
                                <Typography variant="h6" className={classes.title}> Sweet Place </Typography>
                                <Link to="/dashboard" >  <Button style={{ color: '#fff' }}>Dashboard</Button></Link>
                                <LogoutRequest />
                                <CheckOut />

                            </>: null}
                            {(globalState.role === null) ?
                            <>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> <MenuIcon /> </IconButton>
                                <Typography variant="h6" className={classes.title}> Sweet Place </Typography>
                                <Link style={{ color: 'black' }} to="/AddShopCard">  <Button color="inherit">AddShopCard</Button></Link>
                                <Link style={{ color: 'black' }} to="/signup">  <Button color="inherit">SingUp</Button></Link>
                                <Link style={{ color: 'black' }} to="/login">  <Button color="inherit">Login</Button></Link>
                                <Link style={{ color: 'black' }} to="/">  <Button color="inherit">Home</Button></Link>
                                <CheckOut />
                            </>
                            : null }


                            {(globalState.role === "admin") ?
                            <>
                                
                                <Link style={{ color: 'black' }} to="/AddShopCard">  <Button color="inherit">AddShopCard</Button></Link>
                                <Link style={{ color: 'black' }} to="/">  <Button color="inherit">Allorders</Button></Link>
                                
                            </>
                            : null }

                    </Toolbar>
                </AppBar>



            </form>

          
        </>
    )

}


export default AppRoute




