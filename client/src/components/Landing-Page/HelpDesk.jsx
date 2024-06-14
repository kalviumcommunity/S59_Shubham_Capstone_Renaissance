import loginIcon from '../../assets/login.png'
import dashIcon from '../../assets/dashboard.png'
import exploreIcon from '../../assets/contract.png'
import { Link } from 'react-router-dom'

function HelpDesk() {
    return (
        <>
            <h1 className='text-7xl font-extrabold text-center mt-[70px] mb-[50px] '>How to Start Contributing?</h1>
            <div className='flex w-[70vw] lg:w-[75vw] m-auto justify-between'>
                <div className='cursor-pointer text-center shadow-lg border border-gray-300 bg-gray-100 p-10 lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] rounded-full '>
                    <Link to='/Register' className='flex justify-center lg:text-[13px] items-center flex-col'>
                        <img src={loginIcon} alt="loginIcon" className='lg:w-[80px] xl:w-[100px] m-3 ' />
                        Create a free account. Login to your account.</Link>
                </div>
                <div className='cursor-pointer text-center shadow-lg border border-gray-300 bg-gray-100 p-10 lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] rounded-full '>
                    <Link to='/Dashboard' className='flex justify-center lg:text-[13px] items-center flex-col'>
                        <img src={dashIcon} alt="dashIcon" className='lg:w-[80px] xl:w-[100px] m-3 ' />
                        View your dashboard by following the link on the dashboard.</Link>
                </div>
                <div className='cursor-pointer text-center shadow-lg border border-gray-300 bg-gray-100 p-10 lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] rounded-full '>
                    <Link to='NewProject' className='flex justify-center lg:text-[13px] items-center flex-col'>
                        <img src={exploreIcon} alt="exploreIcon" className='lg:w-[80px] xl:w-[100px] m-3 ' />
                        Explore the literature and contribute to polish their magnificence.</Link>
                </div>
            </div>
        </>
    )
}

export default HelpDesk
