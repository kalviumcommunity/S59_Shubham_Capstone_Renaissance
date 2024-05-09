import { useParams } from 'react-router-dom'
import { getForkedProject, fetchChapters, fetchProject, forkProject } from '../../utils/apiUtils'
import { Link } from 'react-router-dom'
import emilySearchDoodle from '../../assets/emily-doodle.jpeg'
import deBonaparte from '../../assets/deBonaparte.jpg'
import { useEffect, useState } from 'react'
import Loader from '../Loaders/Loader'
import getDate from '../../utils/getDate'
import getUserDetails from '../../utils/getUserDetails'
import forkIcon from '../../assets/fork-icon.png'
import forkedIcon from '../../assets/forked.png'

function ProjectInterface() {
    const [project, setProject] = useState(null)
    const [chapters, setChapters] = useState([])
    const [forkedProjects, setForkedProjects] = useState([])
    const [username, setUserName] = useState("")
    const [fork, setFork] = useState(false)
    const { projectID } = useParams()
    const userID = getUserDetails("userID")

    useEffect(() => {
        const username = getUserDetails('userName')
        setUserName(username)
        getForkedProject(userID)
            .then(response => {
                setForkedProjects(response.data)
                console.log(response.data.message)
            })
            .catch(error => {
                console.log(error)
            })

        fetchProject(projectID)
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
        fetchChapters(projectID)
            .then(response => {
                setChapters(response.data)
                console.log("Fetched Chapter: ", response.data)
            })
            .catch(error => {
                if (error.response) {
                    console.log("Error fetching data", error.response.data)
                }
                else {
                    console.log("Some error occurred. Try Again Later", error)
                }
            })
    }, [])

    const handleFork = () => {
        const currDate = getDate()
        const chapters = project.chapters
        const data = {
            dateCreated: currDate,
            chapters: chapters
        }
        forkProject(userID, projectID, data)
            .then(response => {
                setFork(true)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const checkForked = (projectID) => {
        if (fork == true) {
            return true
        }
        for (const project of forkedProjects) {
            if (project == projectID) {
                return true
            }
        }
        return false
    }

    return (
        project ?
            <>
                <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
                    <div className="text-white flex justify-center items-center">
                        <img src={deBonaparte} alt="" className='w-[60px] h-[60px] rounded-full' />
                        <h3 className='ml-5'>{project.projectOwnerName} / </h3>
                        <h3>{project.title}</h3>
                    </div>
                    <div className="text-white">{username}</div>
                </header>
                <div className='py-8 px-10'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-bold text-slate-800 mr-3'>{project && project.title}</h1>
                            <button className='bg-[#97D4A6] py-1.5 px-3 mr-5 rounded text-sm'>6 Branches</button>
                            <div>
                                {project.tags && project.tags.map(tag => <button key={tag} className="bg-gray-200 py-1.5 px-3 rounded text-gray-900 text-sm mr-5">{tag}</button>)}
                            </div>
                            <button className='bg-[#3F5F4F] py-1.5 px-3 rounded text-gray-100 text-sm'>{project.status}</button>
                        </div>
                        <button>
                            {checkForked(project._id) ?
                                <div className='flex border bg-gray-100 py-1.5 px-3 rounded'>
                                    <p className='text-[15px] text-semibold text-[#3F5F4F] mr-1.5'>Forked</p>
                                    <img className="w-[25px]" src={forkedIcon} alt="forked" />
                                </div>
                                :
                                <div className='flex border bg-gray-100 py-1.5 px-3 rounded' onClick={() => handleFork()}>
                                    <p className='text-[15px] text-semibold text-[#3F5F4F] mr-1.5'>Fork</p>
                                    <img className="w-[25px]" src={forkIcon} alt="forkit" />
                                </div>}
                        </button>
                    </div>
                    <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-8 text-slate-900 text-sm rounded '>Shubham Thakur updated 8 months ago</div>
                    <div className='flex mt-3 justify-between'>
                        <div className='w-full'>
                            {project.chapters.length > 0 ?
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
                                <div className='text-center text-gray-700 mt-10'>
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
                </div>
            </>

            : <Loader />
    )
}

export default ProjectInterface
