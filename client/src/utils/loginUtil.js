import axios from 'axios'

const registerUtil = (data) => {
    axios.post('https://renaissance-server.onrender.com/user/login', data)
        .then(response => {
            console.log("Login Successful: ", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default registerUtil