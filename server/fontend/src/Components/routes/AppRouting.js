
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
import axios from 'axios'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



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

const useStyles2 = makeStyles((theme) => ({
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
}));

function AppRoute() {

    const classes = useStyles();
    const classes2 = useStyles2();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    let history = useHistory()
    function logout() {

        axios({
            method: 'post',
            url: 'http://localhost:5000/logout',

        }).then((response) => {
            console.log(response)
            alert(response.data.message)
            history.push('/login')

        }, (err) => {
            console.log(err);
            alert(err)
        });



        return false;
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
                        {/* <Button style={{ color: '#fff' }}><AddCircleOutlineOutlinedIcon /></Button> */}
                        <Button style={{ color: '#fff' }}><AddShoppingCartIcon onClick={handleOpen} /></Button>

                        {/* <Link to="/">  <Button color="inherit">Home</Button></Link> */}
                        {/* <Link to="/signup">  <Button color="inherit">SingUp</Button></Link> */}
                        {/* <Link to="/login">  <Button color="inherit">Login</Button></Link> */}

                    </Toolbar>
                </AppBar>



            </form>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes2.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes2.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
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
                    <Link style={{ color: 'black' }} to="/signup">  <Button color="inherit">SingUp</Button></Link>
                    <Link style={{ color: 'black' }} to="/login">  <Button color="inherit">Login</Button></Link>

                </Toolbar>
            </AppBar>


        </>
    )

}


export default AppRoute
export { LoginSignup };




