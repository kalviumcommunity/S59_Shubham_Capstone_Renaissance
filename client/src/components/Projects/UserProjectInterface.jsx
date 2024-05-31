import UserInfoCard from '../UserInfoCard'
import { fetchProject } from '../../utils/apiUtils'
import { fetchChapters } from '../../utils/apiUtils'
import emilySearchDoodle from '../../assets/emily-doodle.jpeg'
import deBonaparte from '../../assets/deBonaparte.jpg'
import Loader from '../Loaders/Loader'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UserProjectInterface() {
    const { projectID } = useParams()
    const [project, setProject] = useState(null)
    const [chapters, setChapters] = useState(null)
    useEffect(() => {
        fetchProject(projectID)
            .then(response => {
                setProject(response.data)
                return fetchChapters(response.data._id)
            })
            .then(response => {
                setChapters(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        project && chapters ?
            <div>
                <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
                    <div className="text-white flex justify-center items-center">
                        <img src={deBonaparte} alt="" className='w-[60px] h-[60px] rounded-full' />
                        <h3 className='ml-5'>{project.projectOwnerName} / </h3>
                        <h3>{project.title}</h3>
                    </div>
                    <div className="text-white"><UserInfoCard /></div>
                </header>
                <div className='py-8 px-10'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-bold text-slate-800 mr-3'>{project.title}</h1>
                            <button className='bg-[#97D4A6] py-1.5 px-3 mr-5 rounded text-sm'>6 Branches</button>
                            <div>
                                {project.tags && project.tags.map(tag => <button key={tag} className="bg-gray-200 py-1.5 px-3 rounded text-gray-900 text-sm mr-5">{tag}</button>)}
                            </div>
                            <button className='bg-[#3F5F4F] py-1.5 px-3 rounded text-gray-100 text-sm'>{project.status}</button>
                        </div>
                    </div>
                    <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-8 text-slate-900 text-sm rounded '>Shubham Thakur updated 8 months ago</div>
                    <div className='flex mt-3 justify-between'>
                        <div className='w-full'>
                            <div className='flex justify-between items-center mt-5'>
                                <input type="text" className='border border-gray-300 rounded px-2 py-1.5 h-fit text-sm mr-5 bg-gray-100 w-[500px]' placeholder='Search chapter here' />
                                <div className='flex'>
                                    <Link to={`/newChapter/${project.title}/${project._id}/true`}>`<button className="bg-[#3F5F4F] text-sm text-white px-3 py-1.5 rounded mr-1.5">Add Chapter</button>`</Link>
                                    <button className="border border-[#3F5F4F] text-sm text-[#3F5F4F] px-3 py-1.5 rounded">Create Branch</button>
                                </div>
                            </div>
                            {project.chapters.length ?
                                <div>
                                    {chapters.map((chapter, index) => (
                                        <Link to={`/chapter/${project.title}/${chapter._id}`}>
                                            <div className='flex items-center py-5 px-8 bg-gray-100 border border-gray-300 mt-3 w-full text-slate-900 text-sm rounded'>
                                                <p className='mr-8'>{index + 1}.</p>
                                                <p>{chapter.title}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                :
                                <div className='flex justify-center items-center flex-col text-center text-gray-700 mt-10'>
                                    <img src={emilySearchDoodle} alt="No Chapters yet" className='w-[200px] rounded' />
                                    <p className='mt-5'>No Chapters yet!</p>
                                </div>
                            }
                        </div>
                        <div className='w-[500px] h-fit bg-[#97D4A6] py-8 rounded px-8 m-3'>
                            <h3 className='font-bold text-lg'>About</h3>
                            <p className='text-sm rounded mt-3'>{project.description && project.description}</p>
                        </div>
                    </div>
                    <hr className='mt-8 mb-1.5 text-justify' />
                    <p className='text-[13px] text-gray-500'>Hope you're having fun at our website. Just a tiny bit of information that this project is your own. You possess the power to add or update chapters here. If you select it to be open then many other contributers would be able to contribute to it. Once they're done they can send you a request to merge their chapters here. You can accept or reject the requests in your profile section. Cheers!</p>
                </div>
            </div>
            : <Loader />
    )
}

export default UserProjectInterface
