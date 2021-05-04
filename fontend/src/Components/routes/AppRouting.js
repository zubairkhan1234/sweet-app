
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import LogoutRequest from '../logout/Logout'
import { UseGlobalState, UseGlobalStateUpdate } from "../../context/context"
import CheckOut from '../checkOut/CheckOut'



import {
  Link,
  useHistory
} from "react-router-dom";


import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    textAlign: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  onlyforDesktop: {
    display : 'flex',
marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  
}));


function AppRoute() {

  const globalState = UseGlobalState();
  const setGlobalState = UseGlobalStateUpdate()

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  let history = useHistory()



  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}> Sweet Place </Typography>

            <div className={classes.onlyforDesktop}>
              {(globalState.role === null) ?
                <>
                  <Link style={{ color: 'white', textDecoration: 'none' }} to="/">  <Button color="inherit" style={{ textTransform: 'capitalize' }}>Login</Button></Link>
                  <Link style={{ color: 'white', textDecoration: 'none' }} to="/signup">  <Button color="inherit" style={{ textTransform: 'capitalize' }}>Sign up</Button></Link>
                </>
                : null}
              {(globalState.role === "user") ?
                <>
                  <Link style={{ textDecoration: 'none' }} to="/" ><Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>Dashboard</Button></Link>
                  <Link style={{ textDecoration: "none" }} to="/my-all-orders" ><Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>my orders</Button></Link>
                  <LogoutRequest />
                </>
                : null}
              {(globalState.role === "admin") ?
                <>
                  <Link style={{ textDecoration: 'none' }} to="/">  <Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>Allorders</Button></Link>
                  <Link style={{ textDecoration: 'none' }} to="/AddShopCard">  <Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>AddShop Card</Button></Link>
                  <Link style={{ textDecoration: 'none' }} to="/Accepted-order">  <Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>Accepted Order</Button></Link>
                  <Link style={{ textDecoration: 'none' }} to="/Delivered-order">  <Button style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>Delivered Order</Button></Link>
                  <LogoutRequest />
                </>
                : null}
            </div>
          </Toolbar>
        </AppBar>





        <Drawer
          className={classes.drawer}

          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <List>
            {(globalState.role === null) ?
              <>
                <Typography variant="h6" className={classes.title}> Sweet Place </Typography>
                <Link style={{ display: 'block', color: 'black', textDecoration: 'none' }} to="/">  <Button color="inherit" style={{ textTransform: 'capitalize' }}>Login</Button></Link>
                <Link style={{ display: 'block', color: 'black', textDecoration: 'none' }} to="/signup">  <Button color="inherit" style={{ textTransform: 'capitalize' }}>Sign up</Button></Link>
              </>
              : null}
            {(globalState.role === "user") ?
              <>
                <Typography variant="h6" className={classes.title}> Sweet Place </Typography>
                <Link style={{ display: 'block', textDecoration: 'none' }} to="/" ><Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>Dashboard</Button></Link>
                <Link style={{ display: 'block', textDecoration: "none" }} to="/my-all-orders" ><Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>my orders</Button></Link>
                <LogoutRequest />

              </>
              : null}
            {(globalState.role === "admin") ?
              <>

                <Typography variant="h6" className={classes.title}> Sweet Place </Typography>
                <Link style={{ display: 'block', textDecoration: 'none' }} to="/">  <Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>Allorders</Button></Link>
                <Link style={{ display: 'block', textDecoration: 'none' }} to="/AddShopCard">  <Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>AddShop Card</Button></Link>
                <Link style={{ display: 'block', textDecoration: 'none' }} to="/Accepted-order">  <Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>Accepted Order</Button></Link>
                <Link style={{ display: 'block', textDecoration: 'none' }} to="/Delivered-order">  <Button style={{ color: 'black', textDecoration: 'none', textTransform: 'capitalize' }}>Delivered Order</Button></Link>
                <LogoutRequest />

              </>
              : null}
          </List>
        </Drawer>
      </div>
    </>
  )

}


export default AppRoute


