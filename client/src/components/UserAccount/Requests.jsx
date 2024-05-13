import deBonaparte from '../../assets/deBonaparte.jpg'

function Requests() {
    return (
        <div className='py-10 px-8 bg-gray-100 rounded border border-gray-300 mt-10'>
            <h1 className="text-xl text-slate-700 font-bold ">Requests to Merge in your projects</h1>
            <div>
                <div className="white shadow rounded py-5 px-8 bg-white my-5 flex justify-between">
                    <div className='flex'>
                        <img src={deBonaparte} alt="abhishekKaundal" className='rounded-full w-24 h-24' />
                        <div className='m-5'>
                            <h1 className="text-xl text-slate-700 font-bold ">The Last Letter</h1>
                            <p className="text-[14px] text-gray-500">By: AbhishekKaundal052</p>
                            <p className="text-[14px] text-gray-500">13th May, 2024</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <button className="bg-[#3F5F4F] border text-white border-[#3F5F4F] rounded text-sm px-3 py-1.5 rounded">View Request</button>
                        <button className="border border-1.5 border-[#3F5F4F] rounded text-sm px-3 py-1.5 rounded mt-3">Merge Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requests
