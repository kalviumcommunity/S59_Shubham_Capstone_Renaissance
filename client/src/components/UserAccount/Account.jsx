import React, { useEffect } from 'react'
import deBonaparte from '../../assets/deBonaparte.jpg'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneUser, fetchUserProjects } from '../../utils/apiUtils'

function Account() {
    const [isOverview, setIsOverview] = useState(true)
    const [isProjects, setIsProjects] = useState(false)
    const [isContacts, setIsContacts] = useState(false)
    const [userProjects, setUserProject] = useState([])
    const [userData, setUserData] = useState([])
    const { userID } = useParams()
    const toggleModal = (setter) => {
        setIsOverview(false)
        setIsContacts(false)
        setIsProjects(false)
        setter(true)
    }

    useEffect(() => {
        getOneUser(userID)
            .then(response => {
                console.log(response.data)
                setUserData(response.data)
            })
            .catch(error => console.log(error))
        fetchUserProjects(userID)
            .then(response => setUserProject(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='flex justify-between'>
            <div className='w-[30%] bg-gray-100 px-5 py-8 border border-gray-300'>
                <img src={deBonaparte} alt="profileImage" className='rounded-full h-[350px] w-[350px] ' />
                <div className='pt-5'>
                    <h1 className='text-2xl font-bold text-center'>{userData.username}</h1>
                    <div className='flex justify-center'>
                        {userData.occupations && userData.occupations.map(occ => (
                            <p className='py-1.5 m-3 px-3 bg-[#97D4A6] w-fit rounded text-sm mt-3'>{occ}</p>
                        ))}
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-sm text-slate-700 w-fit text-justify'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis placeat vero saepe, impedit, beatae possimus dolore dolorum, deserunt itaque exercitationem id. Beatae, error perferendis. Quam reiciendis ipsa nostrum fugiat fuga.
                    </p>
                </div>
            </div>
            <div className='w-[65%] mt-8 mx-8'>
                <div className='w-[40%] flex justify-between'>
                    <button className={isOverview ? `linkFocus` : `linkHover`} onClick={() => toggleModal(setIsOverview)}>Overview</button>
                    <button className={isProjects ? `linkFocus` : `linkHover`} onClick={() => toggleModal(setIsProjects)} >Projects</button>
                    <button className={isContacts ? `linkFocus` : `linkHover`} onClick={() => toggleModal(setIsContacts)}>Contacts</button>
                </div>
                {isOverview &&
                    <div className='py-10 px-8 bg-gray-100 rounded border border-gray-300 mt-10'>
                        <h1 className='text-2xl font-bold text-slate-700'>Overview</h1>
                        <p className='text-justify text-sm text-slate-700 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate vel, necessitatibus cum omnis, quas ullam voluptates nemo reprehenderit suscipit similique blanditiis eos iste. Veritatis minima omnis a nemo rem?</p>
                        <h1 className='text-2xl font-bold text-slate-700 mt-8'>Statistics</h1>
                        <p className='text-justify text-sm text-slate-700 mt-1.5'>500 Likes</p>
                        <p className='text-justify text-sm text-slate-700 mt-1.5'>1000 Projects</p>
                        <p className='text-justify text-sm text-slate-700 mt-1.5'>20 Contributions</p>
                    </div>
                }
                {isProjects &&
                    <div className='py-10 px-8 bg-gray-100 rounded border border-gray-300 mt-10'>
                        <h1 className='text-2xl font-bold text-slate-700'>Projects</h1>
                        <p className='text-justify text-sm text-slate-400 mt-1.5'>Discover all of the projects here. Read and contribute.</p>
                        {userProjects && userProjects.map(project => (
                            <div className='bg-[#97D4A6] shadow rounded py-3 px-5 my-3'>{project.title}</div>
                        ))}
                    </div>
                }
                {isContacts &&
                    <div className='py-10 px-8 bg-gray-100 rounded border border-gray-300 mt-10'>
                        <h1 className='text-2xl font-bold text-slate-700'>Contacts</h1>
                        <p className='text-justify text-sm text-slate-400 mt-1.5'>Contact the organization through here:</p>
                        <div className='text-[15px] text-slate-600 mt-10'>
                            <p>New Delhi, India</p>
                            <p>Contact - 9876544173</p>
                            <p>Questions? mail at thakur@gmail.com</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Account
