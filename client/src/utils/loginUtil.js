import axios from 'axios'

const registerUtil = (data) => {
    axios.post('http://localhost:8080/user/login', data)
        .then(response => {
            console.log("Login Successful: ", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default registerUtil