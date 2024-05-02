import React from 'react'
import { useState, useEffect } from 'react'
import greenBg from '../../assets/bg-green.png'
import searchIcon from '../../assets/search-icon.png'
import johnKeats from '../../assets/john_keats.jpg'
import HelpDesk from './HelpDesk'
import SimpleSlider from '../Sliders/Slider'
import SecondarySlider from '../Sliders/SecondarySlider'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import WelcomeLoader from '../Loaders/WelcomeLoader'

function Home() {
    const [imageArray, setImageArray] = useState([])

    const fetchArtists = () => {
        fetch("https://renaissance-server.onrender.com/artist")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setImageArray(result)
            })
    }

    useEffect(() => {
        fetchArtists()
    }, [])

    return (
        imageArray.length > 0 ? <div>
            <SimpleSlider />
            <div className='flex'>
                <div className='my-5 pl-10 h-[400px] w-[80%] bg-cover ' style={{ backgroundImage: `url(${greenBg})` }}>
                    <div className='mt-5'>
                        <input type="text" placeholder="Search Here" className="pl-16 py-5 text-3 w-[50vw] my-5 absolute left-[-15px] h-[30px] rounded-3xl border-transparent" />
                        <button className="z-[10] absolute bg-[#3F5F4F] text-slate-100 border-solid border-[#3F5F4F] border-2 py-1.5 px-3 left-[46vw] mt-[20px] rounded-3xl rounded-l-none" ><img src={searchIcon} className='w-[24px]' /></button>
                    </div>
                    <p className='text-3.5 mt-[110px] ml-2 '>I bow to thee,</p>
                    <h1 className='text-8xl font-extrabold'>Renaissance</h1>
                    <p className='text-base ml-2'>Movement that changed the fate of a continent sunken
                        into backwaters</p>
                    <div className='mt-8 pl-2'>
                        <Link to='Dashboard'><button className="bg-[#3F5F4F] text-slate-100 border-solid border-[#3F5F4F] mr-5 rounded border-2 py-1.5 px-3" >Dashboard</button></Link>
                        <button className="bg-transparent text-[[#3F5F4F] border-solid border-[#3F5F4F] mr-5 rounded border-2 py-1.5 px-3" >How to Start?</button>

                    </div>
                </div>
                <div className="w-[350px] bg-cover absolute h-[350px] right-[80px] mt-[30px] border-[#97D4A6] rounded-full border-[30px] shadow-lg" style={{ backgroundImage: `url(${johnKeats})` }}>
                </div>
            </div >
            <h1 className='text-7xl font-extrabold text-center mt-[60px]'>Discover Personalities</h1>
            <p className='text-center mt-[10px] mb-[60px]'>In timeless verse, their ancient souls still breathe.</p>
            {imageArray && <SecondarySlider imageArray={imageArray} />}
            <HelpDesk />
            <Footer />
        </div>
        : <WelcomeLoader />
    )
}

export default Home
