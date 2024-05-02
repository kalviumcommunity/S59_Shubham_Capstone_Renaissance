import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import emilySearchDoodle from '../../assets/emily-doodle.jpeg'
import deBonaparte from '../../assets/deBonaparte.jpg'
import { useEffect, useState } from 'react'
import Loader from '../Loaders/Loader'

function ProjectInterface() {
    const [project, setProject] = useState(null)
    const { projectID } = useParams()

    const fetchProject = () => {
        axios.get(`https://renaissance-server.onrender.com/project/get-project/${projectID}`)
            .then(response => {
                setProject(response.data)
                console.log("Fetched Data: ", response.data)
            })
            .catch(error => {
                if (error.response) {
                    console.log("Error fetching data", error.response.data)
                }
                else {
                    console.log("Some error occurred. Try Again Later", error)
                }
            })
    }

    useEffect(() => {
        fetchProject()
    }, [])
    return (
        project ?
            <>
                <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
                    <div className="text-white flex justify-center items-center">
                        <img src={deBonaparte} alt="" className='w-[60px] h-[60px] rounded-full' />
                        <h3 className='ml-5'>Shubhh_Thakur / </h3>
                        <h3>The Last Letter</h3>
                    </div>
                    <div className="text-white">Shubham Thakur</div>
                </header>
                <div className='py-8 px-10'>
                    <div className='flex'>
                        <h1 className='text-2xl font-bold text-slate-800 mr-3'>{project && project.title}</h1>
                        <button className='bg-[#97D4A6] py-1.5 px-3 mr-5 rounded text-sm'>6 Branches</button>
                        <div>
                            {project.tags && project.tags.map(tag => <button className="bg-gray-200 py-1.5 px-3 rounded text-gray-900 text-sm mr-5">{tag}</button>)}
                        </div>
                        <button className='bg-[#3F5F4F] py-1.5 px-3 rounded text-gray-100 text-sm'>{project.status}</button>
                    </div>
                    <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-8 text-slate-900 text-sm rounded '>Shubham Thakur updated 8 months ago</div>
                    <div className='flex mt-3 justify-between'>
                        <Link to='/NewProject'><button className="bg-[#3F5F4F] mt-5 text-sm text-white px-2 py-1.5 rounded">Add a new Chapter</button></Link>
                        {project.chapters.length ?
                            <div className='w-full'>
                                <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-[slate-900] text-sm rounded'>Chapter 1</div>
                                <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-slate-900 text-sm rounded'>Chapter 2</div>
                                <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-slate-900 text-sm rounded'>Chapter 3</div>
                            </div>
                            :
                            <div className='text-center text-gray-700 mt-10'>
                                <img src={emilySearchDoodle} alt="No Chapters yet" className='w-[200px] rounded' />
                                <p className='mt-5'>No Chapters yet!</p>
                            </div>
                        }
                        <div className='w-[500px] h-fit bg-[#97D4A6] py-8 rounded px-8 m-3'>
                            <h3 className='font-bold text-lg'>About</h3>
                            <p className='text-sm rounded mt-3'>{project.description && project.description}</p>
                        </div>
                    </div>
                </div>
            </>

            : <Loader />
    )
}

export default ProjectInterface