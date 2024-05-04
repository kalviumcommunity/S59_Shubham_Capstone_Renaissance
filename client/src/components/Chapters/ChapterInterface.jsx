import { useEffect, useState } from 'react'
import axios from 'axios'
import deBonaparte from '../../assets/deBonaparte.jpg'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'html-react-parser'

function ChapterInterface() {
    const { chapterID } = useParams()
    const [chapter, setChapter] = useState([])
    const fetchChapter = () => {
        axios.get(`http://localhost:8080/chapter/get-chapter/${chapterID}`)
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
    }

    useEffect(() => {
        fetchChapter()
    }, [])

    return (
        <>
            <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg z-10">
                <div className="text-white flex justify-center items-center">
                    <img src={deBonaparte} alt="profile image" className='w-[60px] h-[60px] rounded-full' />
                    <h3 className='ml-5'>Shubhh_Thakur / </h3>
                    <h3>The Last Letter</h3>
                </div>
                <div className="text-white">Shubham Thakur</div>
            </header>
            <div className='py-8 px-10'>
                <h1 className='text-2xl font-bold text-slate-800 mr-3'>The Last Letter/ {chapter.title}</h1>
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
    )
}

export default ChapterInterface
