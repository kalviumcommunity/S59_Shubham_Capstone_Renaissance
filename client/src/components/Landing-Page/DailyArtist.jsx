import celebratingDoodle from '../../assets/celebrating.png'
import johnKeats from '../../assets/john_keats.jpg'

function DailyArtist() {
    return (
        <div className='flex justify-between'>
            <div className='w-1/2 flex flex-col justify-center items-center h-[100vh] bg-gray-100 shadow-lg border'>
                <h1 className='font-bold text-xl font-bold text-[#3F5F4F]'>RENAISSANCE</h1>
                <img src={celebratingDoodle} alt="" className='w-[48vw]' />
                <div className="w-[350px] bg-cover h-[350px] rounded-full shadow-lg mt-[-40px]" style={{ backgroundImage: `url(${johnKeats})` }} />
            </div>
            <div className='w-1/2 py-8 px-8 h-[100vh] overflow-auto'>
                <h1 className='text-slate-700 text-3xl font-bold'>Artist of the day</h1>
                <p className='text-sm text-gray-400 mt-1.5'>We celebrate the most eloquent personalities of litrature, art and music here in Renaissance. Come daily to visit the most beautiful pieces ever created in the history and know the artist behind them!</p>
                <hr className='mt-5' />
                <p className='text-[15px] text-slate-600 mt-5 text-center'><em>"If poetry doesn't comes as natural as leaves come to trees, it better not come."</em></p>
                <h3 className='text-[#3F5F4F] font-bold text-3xl text-center mt-3'>John Keats</h3>
                <div className='mt-5'>
                    <h3 className='text-slate-700 font-bold text-xl ml-3'>About</h3>
                    <p className='text-justify text-[15px] text-slate-600 border p-5 rounded bg-gray-100 mt-1.5'>
                        John Keats is celebrated as one of the greatest poets in the English language, renowned for his masterful command of imagery and lyrical expression. His ability to evoke profound emotions and vivid sensory experiences through his verses sets him apart.
                    </p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-slate-700 font-bold text-xl ml-3'>Biography</h3>
                    <div className='text-justify text-[15px] text-slate-600 border p-5 rounded bg-gray-100 mt-1.5 flex flex-col'>
                        <div>
                            <h3 className='text-slate-700 font-bold text-lg mt-3'>Birth</h3>
                            <p>31 October, 1776 in Moorgate, London</p>
                        </div>
                        <div>
                            <h3 className='text-slate-700 font-bold text-lg mt-3'>Death</h3>
                            <p>23 February, 1776 in Rome, Italy</p>
                        </div>
                        <div>
                            <h3 className='text-slate-700 font-bold text-lg mt-3'>Parents</h3>
                            <p>Thomas Keatings (f) and Frances Keatings (m)</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-slate-700 font-bold text-xl ml-3'>Life</h3>
                    <p className='text-justify text-[15px] text-slate-600 border p-5 rounded bg-gray-100 mt-1.5'>
                        John Keats (1795-1821) was an influential English Romantic poet born in London. He initially trained as an apothecary before fully dedicating himself to poetry. Over his brief career, he created a significant body of work, including renowned poems such as "Ode to a Nightingale," "Ode on a Grecian Urn," and "To Autumn." Known for his vivid imagery and emotional depth, Keats's work explores themes of beauty, mortality, and the human experience. Despite facing criticism during his lifetime, his poetry gained acclaim posthumously. Keats's life was tragically cut short by tuberculosis at the age of 25, yet his literary legacy endures, marking him as a key figure in English literature.                    </p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-slate-700 font-bold text-xl ml-3'>Life Works</h3>
                    <div className='flex justify-between items-center mt-3'>
                        <img title="Buy On Amazon" src="https://m.media-amazon.com/images/I/716VHWLJ0uL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-44' />
                        <img title="Buy On Amazon" src="https://m.media-amazon.com/images/I/711lDbGxnqL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-44' />
                        <img title="Buy On Amazon" src="https://m.media-amazon.com/images/I/91vsM7hh5HL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-44' />
                    </div>
                </div>
                <hr className='mt-8 mb-3' />
                <p className='text-center text-slate-500 text-sm'>We own none of the images used here. All of them belong to their respective owners.</p>
                <p className='text-center text-slate-500 text-sm'>Renaissance</p>
            </div>
        </div>
    )
}

export default DailyArtist
