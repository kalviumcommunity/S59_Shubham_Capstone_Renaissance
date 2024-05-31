import axios from 'axios'

const registerUtil = (data) => {
    axios.post(`${import.meta.env.VITE_API_USER_URI}/register`, data)
        .then(response => {
            console.log("Response", response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export default registerUtil