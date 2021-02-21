import { LoginSignup } from '../routes/AppRouting'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));






function Login() {

    let history = useHistory();
    const classes = useStyles();

    function login(event) {
        event.preventDefault()

        var loginEmail = document.getElementById('loginEmail').value
        var loginPassword = document.getElementById('loginPassword').value
    
        axios({
            method: 'post',
            url: "http://localhost:5000/login",
            data: {
                email: loginEmail,
                password: loginPassword
            },
            withCredentials: true
        })
    
            .then(function (response) {
                alert(response.data.message)
                history.push('/dashboard')
            })
            .catch(function (error) {
    
                alert(error.response.data.message)
            });
    
    
    
        return false;
    
    
    }

    return (
        <>
            <LoginSignup />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="loginEmail" label="Email" variant="outlined" /><br />
                <TextField id="loginPassword" label="Password" variant="outlined" /><br />
                <Button variant="contained" color="secondary" onClick={login}>
                    Login
                </Button>
            </form>
        </>
    )

}

export default Login;