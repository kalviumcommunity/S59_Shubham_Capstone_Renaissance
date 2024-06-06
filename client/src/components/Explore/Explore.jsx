import { useEffect, useState } from "react"
import Loader from '../Loaders/Loader'
import explore_bg from '../../assets/cover_Explore.jpg'
import { fetchProjects } from "../../utils/apiUtils"
import Footer from "../Footer"
import deBonaparte from '../../assets/deBonaparte.jpg'

function Explore() {
    const [projects, setProjects] = useState([])
    // useEffect(() => {
    //     fetchProjects()
    //         .then(response => setProjects(response.data))
    //         .catch(error => console.log(error))
    // }, [])
    return (
        <>
            {projects ?
                <><div className="py-5 px-8 ">
                    <div className="flex">
                        <h1 className="text-2xl font-bold text-slate-800">Renaissance</h1>
                        <button className="bg-[#3F5F4F] ml-3 text-white border-solid border-[#3F5F4F] text-sm mr-5 rounded border-2 py-0.5 px-1.5">Get Started</button>
                        <button className="text-#3F5F4F] ml-3 border border-[#3F5F4F] text-sm mr-5 rounded border-1 py-0.5 px-3">Login</button>
                    </div>
                    <p className="text-slate-700 text-center mt-10 text-[14px]">We Provide a free access to our users to hundreds of poems, stories, novelletes, novels for free!. Why? Beacuse its open source. We invite you to hlep us build the community of open source for Litreature!</p>
                    <img src={explore_bg} alt="cover" className="rounded my-5 shadow" />
                    <p className="text-slate-700 text-center mt-10 text-[14px]">Explore the litrery pieces penned and contributed by our users. Realize how cooperation makes things easier and exalt the beauty of a piece bya  million times!</p>
                    <h1 className="text-6xl font-bold text-center text-slate-900 mt-1.5">Discover Some Amazing Pieces!</h1>
                    <div className="mt-8">
                        <div className='border bg-white m-3 rounded-xl w-fit px-5 py-8 shadow-lg flex flex-col justify-center'>
                            <div className='flex'>
                                <img src={deBonaparte} alt="deBonaparte" className='rounded-full w-20 h-20 shadow-lg' />
                                <div className='p-3'>
                                    <h1 className='font-bold text-lg'>Shubham Thakur</h1>
                                    <p className='text-slate-700 text-[12px]'>Creative Writer, Author, Director</p>
                                </div>
                            </div>
                            <h1 className='font-bold mt-5'>The Last Letter</h1>
                            <p className='text-slate-700 text-sm'>Hi</p>
                            <div>
                                <button className='bg-[#3F5F4F] w-fit h-fit text-[13px] px-3 py-1.5 rounded mt-2 text-white' >Read</button>
                                <button className='text-[#3F5F4F] font-semibold border border-[1.5px] border-[#3F5F4F] text-[13px] px-3 py-[5px] rounded mt-2 ml-1.5'>About</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <Footer /></>
                : <Loader />
            }
        </>
    )
}

export default Explore
