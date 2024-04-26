import deBonaparte from '../assets/deBonaparte.jpg'
function ProjectInterface() {
    return (
        <>
            <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
                <div className="text-white flex justify-center items-center">
                    <img src={deBonaparte} alt="" className='w-[60px] h-[60px] rounded-full' />
                    <h3 className='ml-5'>Shubhh_Thakur / </h3>
                    <h3>The Last Letter</h3>
                </div>
                <div className="text-white">Shubham Thakur</div>
            </header>
            <div className='py-8 px-10'>
                <div className='flex'>
                    <h1 className='text-2xl font-bold text-slate-800 mr-3'>The Last Letter</h1>
                    <button className='bg-gray-200 py-1.5 px-3 mr-5 rounded text-gray-700 text-sm'>6 Branches</button>
                    <div>
                        <button className='bg-[#97D4A6] py-1.5 px-3 rounded text-gray-900 text-sm mr-5'>Fantasy</button>
                        <button className='bg-[#97D4A6] py-1.5 px-3 rounded text-gray-900 text-sm mr-5'>Mystery</button>
                        <button className='bg-[#97D4A6] py-1.5 px-3 rounded text-gray-900 text-sm mr-5'>WarTime</button>
                    </div>
                    <button className='bg-[#3F5F4F] py-1.5 px-3 rounded text-gray-100 text-sm'>Open</button>
                </div>
                <div className='flex items-center py-5 px-8 bg-[#97D4A6] mt-3 text-slate-900 text-sm rounded'>Shubham Thakur updated 8 months ago</div>
                <div className='flex mt-3 justify-between'>
                    <div className='w-full'>
                        <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-[slate-900] text-sm rounded'>Chapter 1</div>
                        <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-slate-900 text-sm rounded'>Chapter 2</div>
                        <div className='flex items-center py-5 px-8 bg-[#E0D4CD] mt-3 w-full text-slate-900 text-sm rounded'>Chapter 3</div>
                    </div>
                    <div className='w-[500px] bg-[#97D4A6] py-5 px-8 m-3'>
                        <h3 className='font-bold text-lg'>About</h3>
                        <p className='text-sm rounded mt-3'>A young boy embarks on a quest to locate his father armed with nothing but a poignant letter, delving into a journey of self-discovery and familial bonds.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInterface
