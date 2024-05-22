import { PropagateLoader } from 'react-spinners'
import { fetchDataFromGoogleAuth } from '../../utils/apiUtils'
import { useEffect } from 'react'
import setCookie from '../../utils/setCookie'
import { useNavigate } from 'react-router-dom'

function GoogleAuth({setLogin}) {
    const navigate = useNavigate(null)
    useEffect(() => {
        fetchDataFromGoogleAuth()
            .then(response => {
                setCookie('accessToken', response.data.accessToken, 1)
                setLogin(true)
                navigate('/Dashboard')
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='h-[100vh] w-full flex justify-center items-center bg-gray-100'>
            <div className='flex flex-col items-center'>
                <h3 className='text-[#3F5F4F] text-xl font-bold mt-3 w-fit m-auto'>We're just there...</h3>
                <PropagateLoader color='#3F5F4F' size={15} className='mt-5' />
            </div>
        </div>
    )
}

export default GoogleAuth
