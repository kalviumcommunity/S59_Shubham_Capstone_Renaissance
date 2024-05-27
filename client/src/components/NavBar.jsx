import { useState } from 'react'
import compass from '../assets/compass.png'
import dashboard from '../assets/dashboard-white.png'
import user from '../assets/user-white.png'
import help from '../assets/help-white.png'
import home from '../assets/home-white.png'
import explore from '../assets/explore-white.png'
import { Link } from 'react-router-dom'
import getUserDetails from '../utils/getUserDetails'

function NavBar() {
    const [expand, setExpand] = useState(false)
    const userID = getUserDetails('userID')
    return (
        <nav className='flex fixed z-5 top-[20px] right-[20px] flex flex-col'>
            <div className={`w-[50px] h-[50px] bg-slate-700 p-1.5 shadow-xl cursor-pointer rounded-full ${expand ? 'rotateIcon' : "rotateBack"}`}>
                <img src={compass} id="navigation" alt="navigation" onClick={() => setExpand(!expand)} />
            </div>
            {expand && (
                <div className='flex flex-col'>
                    <Link to='/' className='w-[50px] h-[50px] bg-slate-700 p-3 shadow-xl cursor-pointer rounded-full mt-3'>
                        <img src={home} alt="navigation" />
                    </Link >
                    <Link to='/Dashboard' className='w-[50px] h-[50px] bg-slate-700 p-3 shadow-xl cursor-pointer rounded-full mt-3'>
                        <img src={dashboard} alt="navigation" />
                    </Link >
                    <Link to='/Dashboard' className='w-[50px] h-[50px] bg-slate-700 p-3 shadow-xl cursor-pointer rounded-full mt-3'>
                        <img src={explore} alt="navigation" />
                    </Link >
                    <Link to='/Dashboard' className='w-[50px] h-[50px] bg-slate-700 p-3 shadow-xl cursor-pointer rounded-full mt-3'>
                        <img src={help} alt="navigation" />
                    </Link >
                    <Link to={userID ? `/userAccount/${userID}` : '/Register'} className='w-[50px] h-[50px] bg-slate-700 p-3 shadow-xl cursor-pointer rounded-full mt-3'>
                        <img src={user} alt="navigation" />
                    </Link >
                </div>
            )}
        </nav>
    )
}

export default NavBar
