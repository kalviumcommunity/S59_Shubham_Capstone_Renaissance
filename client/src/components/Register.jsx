import { useState } from 'react'
import deDanteWall from '../assets/Dante-wall.png'
function Register() {
    const [isRegistered, setRegStatus] = useState(true)
    const [traits, setTraits] = useState({ 'student': false, 'professional': false, amateur: false })

    const handleTraitsChange = (trait) => {
        setTraits(prevState => ({
            ...prevState,
            [trait]: !prevState[trait]
        }))
    }

    return (
        <div className='flex'>
            <div className='w-[50vw] h-[100vh] bg-cover' style={{ backgroundImage: `url(${deDanteWall})` }}>
            </div>
            <div className='flex justify-center items-center w-[50vw]'>
                <div>
                    {!isRegistered && <h1 className='font-extrabold text-5xl text-center'>Register here!</h1>}
                    {isRegistered && <h1 className='font-extrabold text-6xl text-center'>Hello Again!</h1>}
                    {isRegistered && <>
                        <p className='text-center mt-3'>Imagine. Write. Collaborate.</p>
                        <p className='text-center'>Welcome to a community that loves litreature!</p>
                    </>}
                    <div className=' flex flex-col justify-center items-center mt-5'>
                        <input type="text" className='w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm' placeholder='Enter your username' />
                        {!isRegistered && <>
                            <input type="text" className='w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm' placeholder='Enter your mail' />
                            <p className='text-sm mt-3 mb-1.5 w-[380px] text-left'>I love writing and I am a</p>
                            <div className='flex items-center w-[400px] flex-wrap mb-1.5'>
                                <button className={`mx-3 my-1.5 w-fit bg-[${traits['student'] ? '#97D4A6' : '#e6faeb'}] text-sm px-3 py-1.5 rounded text-[#3F5F4F]`} onClick={() => handleTraitsChange('student')}>Student</button>
                                <button className={`mx-3 my-1.5 w-fit bg-[${traits['professional'] ? '#97D4A6' : '#e6faeb'}] text-sm px-3 py-1.5 rounded text-[#3F5F4F]`}
                                    onClick={() => handleTraitsChange('professional')}>Professional</button>
                                <button className={`mx-3 my-1.5 w-fit bg-[${traits['amateur'] ? '#97D4A6' : '#e6faeb'}] text-sm px-3 py-1.5 rounded text-[#3F5F4F]`}
                                    onClick={() => handleTraitsChange('amateur')}>Amateur Author</button>
                            </div>
                        </>}
                        <input type="password" className='w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm' placeholder='Enter your password' />
                        {!isRegistered && <input type="password" className='w-[400px] bg-gray-300 py-2 px-3.5 rounded m-1.5 placeholder-slate-800 text-sm' placeholder='Confirm your password' />
                        }
                        <button className='w-[400px] bg-[#97D4A6] py-2 px-3.5 rounded m-1.5 text-sm'>Let me in!</button>
                    </div>
                    <p className='text-center text-sm m-3'>or</p>
                    <button className='w-[400px] bg-[#97D4A6] py-2 px-3.5 rounded m-1.5 text-sm'>Continue with Google</button>
                    {isRegistered && <p className='text-center text-sm m-3'>Don't have an account? <span className='text-[#3F5F4F] cursor-pointer underline' onClick={() => setRegStatus(false)}>Register here</span></p>
                    }
                    {!isRegistered &&
                        <p className='text-center text-sm m-3'>Already have an account? <span className='text-[#3F5F4F] cursor-pointer underline' onClick={() => setRegStatus(true)}>Login here</span></p>

                    }
                </div>
            </div>
        </div>
    )
}

export default Register
