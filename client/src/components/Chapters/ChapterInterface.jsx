import { useEffect, useState } from 'react'
import { fetchChapter } from '../../utils/apiUtils'
import deBonaparte from '../../assets/deBonaparte.jpg'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'html-react-parser'
import Loader from '../Loaders/Loader'
import getUserDetails from '../../utils/getUserDetails'

function ChapterInterface() {
    const { chapterID, projectName } = useParams()
    const [chapter, setChapter] = useState(null)
    const [userName, setUserName] = useState("")

    useEffect(() => {
        const username = getUserDetails("userName")
        setUserName(username)
        fetchChapter(chapterID)
            .then(response => {
                setChapter(response.data)
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
    }, [])

    return (
        chapter ?
            <>
                <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg z-10">
                    <div className="text-white flex justify-center items-center">
                        <img src={deBonaparte} alt="profile image" className='w-[60px] h-[60px] rounded-full' />
                        <h3 className='ml-5'>{userName} / </h3>
                        <h3>{projectName}</h3>
                    </div>
                    <div className="text-white">{userName}</div>
                </header>
                <div className='py-8 px-10'>
                    <h1 className='text-2xl font-bold text-slate-800 mr-3'>{projectName}/ {chapter.title}</h1>
                    <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-3 text-slate-900 text-sm rounded '>Shubham Thakur updated 8 months ago</div>
                    <div className='flex justify-between'>
                        <div className='w-[70vw] bg-gray-300 h-[100vh] mt-5 rounded py-8 px-8'>
                            <h1 className='font-bold text-slate-800 text-2xl text-center'>{chapter.title}</h1>
                            <p className='mt-5'>{chapter.content && ReactHtmlParser(chapter.content)}</p>
                        </div>
                        <button className="bg-[#3F5F4F] text-slate-100 border-solid border-[#3F5F4F] my-5 ml-3 rounded border-2 py-1.5 px-3 h-fit w-[20vw] mt-10">Edit the Chapter</button>
                    </div>
                </div>
            </>
            : <Loader />
    )
}

export default ChapterInterface
