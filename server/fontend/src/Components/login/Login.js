// import React, {useState} from 'react'
import { LoginSignup } from '../routes/AppRouting'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';





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
    // const [alertMessage, setAlertMessage] = useState("")
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
                if(response.status === 200){
                    alert(response.data.message)
                    history.push('/dashboard')
                }
                // setAlertMessage(response.data.message)
            })
            .catch(function (error) {

                alert(error.response.data.message)
            });



        return false;


    }

    return (
        <>
            <LoginSignup />

            {/* {alertMessage ? <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {alertMessage}
            </Alert>: null} */}
            <Container maxWidth="sm">
                <h1 style={{ display: "inline", marginLeft: 100 }}>Login Now</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="loginEmail" label="Email" variant="outlined" /><br />
                    <TextField id="loginPassword" label="Password" variant="outlined" /><br />
                    <Button variant="contained" color="secondary" onClick={login}>
                        LogIn
                </Button>
                </form>
            </Container>
        </>
    )

}

export default Login;