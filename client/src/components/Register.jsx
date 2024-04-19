import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import deDanteWall from '../assets/Dante-wall.png'

function Register() {
    const [isRegistered, setRegStatus] = useState(true)

    return (
        <div className='flex'>
            <div className='w-[50vw] h-[100vh] bg-cover' style={{ backgroundImage: `url(${deDanteWall})` }}>
            </div>
            {!isRegistered ? <Signup setRegStatus = {setRegStatus}/> : <Login setRegStatus = {setRegStatus} />}
        </div >
    )
}

export default Register
