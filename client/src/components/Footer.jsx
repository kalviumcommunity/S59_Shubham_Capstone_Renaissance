import deBonaparte from '../assets/deBonaparte.jpg'
function Footer() {
    return (
        <footer>
            <div className="flex justify-between px-20 mt-10 py-14 bg-[#97D4A6] border-t border-[#3F5F4F]">
                <div>
                    <h3 className="font-bold text-2xl text-[#3F5F4F] ml-2">Important Links</h3>
                    <ul>
                        <li className="p-2 mt-5">Explore literary pieces here</li>
                        <li className="p-2">Terms and conditions</li>
                        <li className="p-2">Privacy Policy</li>
                        <li className="p-2">Credits and Acknowledgements</li>

                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-[#3F5F4F] ml-2">Important Links</h3>
                    <ul>
                        <li className="p-2 mt-5">Explore literary pieces here</li>
                        <li className="p-2">Terms and conditions</li>
                        <li className="p-2">Privacy Policy</li>
                        <li className="p-2">Credits and Acknowledgements</li>

                    </ul>
                </div>
                <div className='w-[20vw]'>
                    <h3>Questions?  Mail shubham.thakur@kalvium.community</h3>
                    <div>
                        <h3>© Shubham Thakur (2024)</h3>
                        <h3>All rights reserved.</h3>
                    </div>
                </div>
            </div>
            <div className="bg-[#3F5F4F] text-slate-100 py-5 px-8 text-center">We own none of the assets used here. They belong to their respective owners.</div>
        </footer>
    )
}

export default Footer
