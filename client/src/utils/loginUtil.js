import axios from 'axios'
import setCookie from './setCookie'

const loginUtil = (data) => {
    axios.post('https://renaissance-server.onrender.com/user/login', data)
        .then(response => {
            try {
                setCookie('user', response.data.username, 1)
                console.log("Login Successful: ", response.data)
            }
            catch (error) {
                console.log("Error setting up the cookie", error)
            }
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default loginUtil