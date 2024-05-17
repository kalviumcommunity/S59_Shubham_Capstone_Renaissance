import { setProfileImage, getProfileImage } from '../../utils/apiUtils'
import { useState, useEffect } from 'react'
import { showProfileImage } from '../../utils/getProfileImage'

function MyProfile({ userID }) {
    const [selProfile, setSelFile] = useState("")
    const [imgURL, setImgURL] = useState("")

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelFile(file)
        console.log(file)
    }
    const handleFileUpload = () => {
        setProfileImage(userID, selProfile)
            .then(response => {
                console.log(response)
                showProfileImage(userID, setImgURL)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        showProfileImage(userID, setImgURL)
    }, [])

    return (
        <div className='py-10 px-8 bg-gray-100 rounded border border-gray-300 mt-10'>
            <h1 className="text-xl text-slate-700 font-bold ml-1.5">My Profile</h1>
            <div className="white shadow rounded py-10 px-8 bg-white my-5">
                <h1 className="text-xl text-slate-700 font-bold">Your Personal Details:</h1>
                <p className="text-[13.5px] mb-5 mt-1.5 text-slate-600 mt-1.5">Enter your personal details like username, mail and bio to update. (In case you did no change the original data shall remain intact)</p>
                <div className='flex justify-start items-start'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={imgURL && imgURL} alt="abhishekKaundal" className='rounded-full w-[150px]' />
                        <div className='text-[13px] mt-3'>
                            <label htmlFor="file-upload" className='text-sm cursor-pointer border bg-gray-100 rounded w-24 px-3 py-1.5 text-slate-700'>Upload from device</label>
                            <input type="file" id="file-upload" onChange={handleFileChange} />
                            <div className='mt-3 text-slate-500 text-center'>{selProfile && selProfile.name}</div>
                        </div>
                        <button className="bg-[#97D4A6] m-auto mt-3 text-[13px] border-solid border-[#97D4A6] rounded border-2 py-1.5 px-3" onClick={handleFileUpload}>Change</button>
                    </div>
                    <div className='flex flex-col justify-center ml-8 mt-5'>
                        <div>
                            <p className='text-[13px] text-gray-400 pl-3'>Your Username</p>
                            <input
                                type="text"
                                className='text-sm text-left border border-1.5 bg-gray-100 border-gray-300 rounded py-1.5 px-3 font-semibold text-gray-600'
                                placeholder="parull_chauhann"
                                value="parull_chauhann" />
                        </div>
                        <div>
                            <p className='text-[13px] text-gray-400 pl-3 mt-5'>Your Bio</p>
                            <textarea rows={4} cols={50} className='text-sm text-left border border-1.5 bg-gray-100 border-gray-300 rounded py-1.5 px-3 font-semibold text-gray-600'
                                placeholder="parul@gmail.com"
                                value="parul@gmail.com" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="white shadow rounded py-10 px-8 bg-white my-5">
                <h1 className="text-xl text-slate-700 font-bold">Your Contacts and Locations:</h1>
                <p className="text-[13.5px] mb-5 text-slate-600 mt-1.5">Enter your personal details like username, mail and bio to update. (in case you did no change the original data shall remain intact)</p>
                <div>
                    <p className='text-[13px] text-gray-400 pl-3 mt-5'>Your mail</p>
                    <input
                        type="text"
                        className='text-sm text-left border border-1.5 bg-gray-100 border-gray-300 rounded py-1.5 px-3 font-semibold text-gray-600'
                        placeholder="parul@gmail.com"
                        value="parul@gmail.com" />
                </div>
                <div>
                    <p className='text-[13px] text-gray-400 pl-3 mt-5'>Your City and Country:</p>
                    <input
                        type="text"
                        className='text-sm text-left border border-1.5 bg-gray-100 border-gray-300 rounded py-1.5 px-3 font-semibold text-gray-600'
                        placeholder="parul@gmail.com"
                        value="parul@gmail.com" />
                </div>
            </div>
            <button className="bg-[#97D4A6] ml-1.5 text-sm border-solid border-[#97D4A6] mr-5 rounded border-2 py-1.5 px-3" >Save Changes</button>
        </div>
    )
}
export default MyProfile
