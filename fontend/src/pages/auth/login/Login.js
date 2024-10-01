import React, { useRef } from 'react'
import BaseURL from '../../../Components/Url/BaseURL'
import { UseGlobalStateUpdate } from '../../../context/context'
import { Container, Avatar, TextField, Button, Typography, CssBaseline } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import axios from 'axios';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {

    const globalStateUpdate = UseGlobalStateUpdate()
    var loginEmail = useRef('')
    var loginPassword = useRef('')

    const classes = useStyles();
    // const [alertMessage, setAlertMessage] = useState("")
    function Login(event) {
        event.preventDefault()
        console.log(loginEmail.current.value)
        console.log(loginPassword.current.value)

        axios({
            method: 'post',
            url: BaseURL + '/login',
            data: {
                email: loginEmail.current.value,
                password: loginPassword.current.value
            },
            withCredentials: true
        })
            .then(function (response) {
                if (response.data.status === 200) {
                    console.log("loginRequestUser ====>", response.data.loginRequestUser.role)

                    globalStateUpdate(prev => ({
                        ...prev,
                        loginStatus: true,
                        user: response.data.loginRequestUser,
                        role: response.data.loginRequestUser.role
                    }))

                    alert(response.data.message)
                } else {
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                console.log("ldafjldja ", error)
                // console.log("ldafjldja ", error.response.data.message)

            });

        return false;

    }



    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={Login}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="loginEmail"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            inputRef={loginEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="loginPassword"
                            autoComplete="current-password"
                            inputRef={loginPassword}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Login
                        </Button>
                        <Link to={'/signup'}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                signUp
                            </Button>
                        </Link>
                    </form>
                </div>

            </Container>
        </>
    )

}

export default Login;




