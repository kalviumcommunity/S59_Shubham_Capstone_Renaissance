import axios from 'axios'
import setCookie from './setCookie'

const registerUtil = (data) => {
    axios.post('https://renaissance-server.onrender.com/user/login', data)
        .then(response => {
            setCookie('user', response.data.username, 1)
            console.log("Login Successful: ", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default registerUtil