import  BaseURL  from '../Url/BaseURL'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {UseGlobalState, UseGlobalStateUpdate} from '../../context/context'


function Logout() {
    const globalState = UseGlobalState()
    const globalStateUpdate = UseGlobalStateUpdate()

    const history = useHistory()

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


    return   <Button style={{ color: 'white',textDecoration: 'none' }} onClick={LogoutRequest} type="submit" > Logout </Button>

}


export default Logout;