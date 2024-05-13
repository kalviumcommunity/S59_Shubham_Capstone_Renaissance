import axios from 'axios'

const registerUtil = (data) => {
    axios.post('https://renaissance-server.onrender.com/user/register', data)
        .then(response => {
            console.log("Response", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default registerUtil