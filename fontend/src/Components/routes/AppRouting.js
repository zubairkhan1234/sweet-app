
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';



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

    const classes = useStyles();
    let history = useHistory()


    const logout = () => {
        history.push('/login')
        console.log('clicked')
    }

    return (
        <>
            <form>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Sweet Place
                    </Typography>

                        <Link to="/dashboard" >  <Button style={{ color: '#fff' }}>Dashboard</Button></Link>
                        <Button onClick={logout} style={{ color: '#fff' }}>logout</Button>
                        <Button style={{ color: '#fff' }}><AddCircleOutlineOutlinedIcon /></Button>
                        <Button style={{ color: '#fff' }}><AddShoppingCartIcon /></Button>
                                                
                        {/* <Link to="/">  <Button color="inherit">Home</Button></Link> */}
                        {/* <Link to="/signup">  <Button color="inherit">SingUp</Button></Link> */}
                        {/* <Link to="/login">  <Button color="inherit">Login</Button></Link> */}

                    </Toolbar>
                </AppBar>

            </form>
        </>
    )

}
function LoginSignup() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Sweet Place
                    </Typography>
                    <Link style={{ color: 'black' }} to="/">  <Button color="inherit">Home</Button></Link>
                    <Link style={{ color: 'black' }} to="/signup">  <Button  color="inherit">SingUp</Button></Link>
                    <Link style={{ color: 'black' }} to="/login">  <Button  color="inherit">Login</Button></Link>

                </Toolbar>
            </AppBar>


        </>
    )

}


export default AppRoute
export { LoginSignup };


