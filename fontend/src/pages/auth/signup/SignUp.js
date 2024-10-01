
import { makeStyles } from '@mui/styles';
import { TextField, Button, Container, Avatar, CssBaseline, Typography } from "@mui/material"
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import BaseURL from '../../../Components/Url/BaseURL'



import axios from 'axios'
import { useNavigate } from 'react-router-dom';


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




function SignUp() {

    let history = useNavigate()
    const classes = useStyles();

    function signup(event) {
        event.preventDefault()


        var userName = document.getElementById('name').value
        var userEmail = document.getElementById('email').value.toLowerCase()
        var userPhone = document.getElementById('phone').value
        var userPassword = document.getElementById('password').value

        // console.log(userEmail)
        var userData = {
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: userPassword
        }

        console.log(userData)
        // console.log(userData)
        axios({
            method: 'post',
            url: BaseURL + '/signup',
            data: userData,
            withCredentials: true

        })
            .then(function (response) {
                // console.log(response);
                if (response.data.status === 200) {
                    alert(response.data.message)
                    // console.log(response.data)
                    history.push('/login')
                } else {
                    console.log(response)
                    alert(response.data.message)
                    // console.log(response.data)
                }
            })
            .catch(function (error) {
                console.log(error.response.data.message)
                alert(error.response.data.message)

            });

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("password").value = ""

        return false;
    }

    return (
        <>
            {/* <Container maxWidth="sm">
                <h1 style={{ display: "inline", marginLeft: 100 }}>SignUp Now</h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={signup}>
                    <TextField id="name" label="Name" variant="outlined" /> <br />
                    <TextField id="phone" label="Phone" variant="outlined" /> <br />
                    <TextField id="email" label="Email" variant="outlined" /> <br />
                    <TextField id="password" label="Password" variant="outlined" /><br />
                    <Button type="submit" variant="contained" color="secondary" >
                        Sign Up
                    </Button>
                </form>
            </Container> */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockClockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={signup}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                        />
                        <TextField
                            id="phone"
                            label="Phone"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
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
                    </form>
                </div>

            </Container>



        </>
    )

}


export default SignUp;
