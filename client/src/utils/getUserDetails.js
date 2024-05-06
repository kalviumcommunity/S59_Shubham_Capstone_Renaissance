import getCookie from './getCookie'
import {jwtDecode }from 'jwt-decode'

const getUserDetails = (query) => {
    const token = getCookie('accessToken')
    const decodedToken =  jwtDecode(token)
    return decodedToken[query]
}

export default getUserDetails