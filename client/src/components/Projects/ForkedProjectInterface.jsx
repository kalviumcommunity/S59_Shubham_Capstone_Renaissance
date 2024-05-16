import { useParams } from 'react-router-dom'
import { fetchProject, fetchUserChapters, getFork } from '../../utils/apiUtils'
import { Link } from 'react-router-dom'
import emilySearchDoodle from '../../assets/emily-doodle.jpeg'
import deBonaparte from '../../assets/deBonaparte.jpg'
import upload from '../../assets/upload.png'
import { useEffect, useState } from 'react'
import Loader from '../Loaders/Loader'
import getUserDetails from '../../utils/getUserDetails'
import UploadChapter from '../Chapters/UploadChapter'

function ForkedProjectInterface() {
    const { forkID } = useParams()
    const [projectID, setProjectID] = useState()
    const [forkedProject, setForkedProject] = useState(null)
    const [originalProject, setOriginalProject] = useState(null)
    const [chapters, setChapters] = useState(null)
    const [isUploadChapter, setUploadChapter] = useState(false)
    const username = getUserDetails('userName')

    useEffect(() => {
        getFork(forkID)
            .then(response => {
                setProjectID(response.data.projectID)
                setForkedProject(response.data)
            })
            .catch(error => {
                console.log("Error fetching the fork", error)
            })
    }, [])

    useEffect(() => {
        const userID = getUserDetails('userID')
        if (projectID) {
            fetchProject(projectID)
                .then(response => {
                    setOriginalProject(response.data)
                })
                .catch(error => {
                    console.log("Error fetching the original project", error)
                })
            fetchUserChapters(forkID, userID)
                .then(response => {
                    setChapters(response.data)
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

    })
    return (
        originalProject ?
            <>
                <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
                    <div className="text-white flex justify-center items-center">
                        <img src={deBonaparte} alt="" className='w-[60px] h-[60px] rounded-full' />
                        <h3 className='ml-5'>{originalProject.projectOwnerName} / </h3>
                        <h3>{originalProject.title}</h3>
                    </div>
                    <div className="text-white">{username}</div>
                </header>
                <div className='py-8 px-10'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-2xl font-bold text-slate-800 mr-3'>{originalProject && originalProject.title}</h1>
                            <button className='bg-[#97D4A6] py-1.5 px-3 mr-5 rounded text-sm'>6 Branches</button>
                            <div>
                                {originalProject.tags && originalProject.tags.map(tag => <button key={tag} className="bg-gray-200 py-1.5 px-3 rounded text-gray-900 text-sm mr-5">{tag}</button>)}
                            </div>
                            <button className='bg-[#3F5F4F] py-1.5 px-3 rounded text-gray-100 text-sm'>{originalProject.status}</button>
                        </div>
                    </div>
                    <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-8 text-slate-900 text-sm rounded '>Shubham Thakur updated 8 months ago</div>
                    <div className='flex mt-3 justify-between'>
                        <div className='w-full'>
                            <div className='flex justify-between items-center mt-5'>
                                <input type="text" className='border border-gray-300 rounded px-2 py-1.5 h-fit text-sm mr-5 bg-gray-100 w-[500px]' placeholder='Search chapter here' />
                                <div className='flex'>
                                    <Link to={`/newChapter/${originalProject.title}/${forkID}`}>`<button className="bg-[#3F5F4F] text-sm text-white px-3 py-1.5 rounded mr-1.5">Add Chapter</button>`</Link>
                                    <button className="border border-[#3F5F4F] text-sm text-[#3F5F4F] px-3 py-1.5 rounded">Create Branch</button>
                                </div>
                            </div>
                            {forkedProject.chapters && forkedProject.chapters.length ?
                                <div>
                                    {chapters && chapters.map((chapter, index) => (
                                        <div className={`flex items-center justify-between py-5 px-8 mt-3 w-full text-slate-900 text-sm rounded ${chapter.isApproved ? 'border border-gray-300 bg-gray-100' : 'bg-[#c5e8ce] border border-[#97D4A6]'}`}>
                                            <div className='flex items-center'>
                                                <p className='mr-8'>{index + 1}.</p>
                                                <Link to={`/chapter/${originalProject.title}/${chapter._id}`}><p>{chapter.title}</p></Link>
                                            </div>
                                            <div>
                                                <img src={upload} alt="" className='w-[25px] cursor-pointer' onClick={() => setUploadChapter(true)} />
                                                {isUploadChapter && <UploadChapter projectID={projectID} chapterID={chapter._id} userID = {originalProject.projectOwner} contributerName = {username} projectName = {originalProject.title} setUploadChapter = {setUploadChapter}/>}
                                            </div>
                                        </div>
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
                            <p className='text-sm rounded mt-3'>{originalProject.description && originalProject.description}</p>
                        </div>
                    </div>
                </div>
            </>
            : <Loader />
    )
}

export default ForkedProjectInterface
