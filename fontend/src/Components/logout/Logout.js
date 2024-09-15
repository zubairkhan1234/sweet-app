import BaseURL from '../Url/BaseURL'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { UseGlobalStateUpdate } from '../../context/context'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    color: {
        color: 'white',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            color: 'black'
        }
    }
}))


function Logout() {
    const globalStateUpdate = UseGlobalStateUpdate()
    const classes = useStyles()



    const LogoutRequest = () => {
        axios({
            method: 'post',
            url: BaseURL + '/logout',
            withCredentials: true
        }).then((response) => {
            if (response.status === 200) {
                // history.push('/login');
                alert(response.data.message)
                globalStateUpdate(prev => ({
                    ...prev,
                    loginStatus: null,
                    user: null,
                    role: null
                }))

            }
        }).catch((error) => {
            console.log(error.data.message);
        });
    }


    return <Button className={classes.color} onClick={LogoutRequest} type="submit" > Logout </Button>

}


export default Logout;