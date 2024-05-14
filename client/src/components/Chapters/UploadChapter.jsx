import getDate from "../../utils/getDate"
import getUserDetails from "../../utils/getUserDetails"
import { useState } from "react"
import { pullChapter } from "../../utils/apiUtils"

function UploadChapter({ projectID, chapterID, setUploadChapter }) {
    const [message, setMessage] = useState(null)
    const setPullRequest = () => {
        const date = getDate()
        const userID = getUserDetails('userID')
        const data = { projectID: projectID, timestamp: date, userID: userID, updatedChapter: chapterID, message: message }
        console.log(data)
        pullChapter(data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className="fixed bottom-0 left-0 w-[100vw] h-[100vh] bg-black opacity-10"></div>
            <div className="fixed top-[30%] left-[30%] bg-gray-100 border border-gray-300 rounded py-10 px-8 w-[40%]">
                <h1 className='font-bold text-2xl'>Upload the chapter to Original Project</h1>
                <p className="text-gray-500 text-[12px]">Once the onwer of the project approves your submission, your work would be saved in the main project</p>
                <hr />
                <h1 className='font-bold text-lg mt-5'>Chapter Name: <span className="text-gray-700">The Letter</span></h1>
                <p className="text-gray-500 text-[12px]">Your progress in the chapter shall be sent as a request to merge in the original project</p>
                <textarea placeholder="Enter message here" value={message} onChange={(e) => setMessage(e.target.value)} className="p-5 rounded mt-5 w-full border placeholder-gray-500 text-sm"></textarea>
                <button onClick={() => setPullRequest()} className="bg-[#3F5F4F] text-sm text-white px-3 py-1.5 rounded mt-8">Send a Request</button>
                <button onClick={() => setUploadChapter(false)} className="bg-red-100 border border-red-400 text-sm text-red-400 px-3 ml-5 py-1.5 rounded mt-8">I'll do it later</button>
            </div></>
    )
}

export default UploadChapter