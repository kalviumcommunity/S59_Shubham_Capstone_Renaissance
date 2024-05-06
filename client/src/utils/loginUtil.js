import axios from 'axios'
import setCookie from './setCookie'
import { toast } from 'react-toastify'
import getUserDetails from './getUserDetails'

const loginUtil = (data, setLoginStatus) => {
    axios.post('http://localhost:8080/user/login', data)
        .then(response => {
            try {
                setCookie('accessToken', response.data.accessToken, 1)
                toast.success("Login Successful!")
                setLoginStatus(false)
            }
            catch (error) {
                toast.error(response.message)
                console.log("Error setting up the cookie", error)
                setLoginStatus(false)
            }
        })
        .catch(error => {
            error.response ? toast.error(error.response.data.message) : toast.error("Something wrong happened. Try again later")
            console.log(error)
            setLoginStatus(false)
        })
}

export default loginUtil