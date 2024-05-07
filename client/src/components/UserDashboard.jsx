import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import axios from 'axios'
import { Link, useAsyncError } from 'react-router-dom'
import searchIcon from '../assets/search-icon.png'
import deVanGoghDoodle from '../assets/van-gogh.png'
import keatsDoodle from '../assets/keats-doodle.jpeg'
import statsIcon from '../assets/stats-icon.png'
import deBonaparte from '../assets/deBonaparte.jpg'
import Loader from './Loaders/Loader'
import getUserDetails from '../utils/getUserDetails'

function UserDashboard() {
    const [userProjects, setUserProjects] = useState([])
    const [latestProjects, setLatestProjects] = useState([])
    const [projects, setProjects] = useState([])
    const [allTags, setTags] = useState([])
    const [username, setUserName] = useState("")
    const exploreRef = useRef()
    const [filter, setFilter] = useState({ filterVal: "All", filteredProjects: [] })

    useEffect(() => {
        const userID = getUserDetails('userID')
        setUserName(getUserDetails("userName"))
        fetchLatestProjects(userID)
        fetchUserProjects(userID)
        fetchProjects()
    }, [])

    const filterProjects = useMemo(() => {
        if (filter.filterVal === "All") {
            return projects
        }
        else {
            return projects.filter(project => project.tags.includes(filter.filterVal))
        }
    }, [filter.filterVal])

    useEffect(() => {
        setFilter(prevFilter => ({
            ...prevFilter,
            filteredProjects: filterProjects
        }))
    }, [filterProjects])

    const fetchUserProjects = (userID) => {
        axios.get(`https://renaissance-server.onrender.com/user/user-project/${userID}`)
            .then(response => {
                setUserProjects(response.data)
                console.log("Fetched Data: ", response.data)
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data)
                }
                else {
                    console.log("Some error occurred. Try Again Later", error)
                }
            })
    }

    const fetchLatestProjects = (userID) => {
        axios.get(`https://renaissance-server.onrender.com/latest/${userID}`)
            .then(response => {
                console.log(1, response.data)
                setLatestProjects(response.data)
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data)
                }
                else {
                    console.log("Some error occurred. Try Again Later", error)
                }
            })
    }

    const fetchProjects = () => {
        axios.get(`https://renaissance-server.onrender.com/project`)
            .then(response => {
                setFilter(prevFilter => ({
                    ...prevFilter,
                    filteredProjects: response.data
                })
                )
                setProjects(response.data)
                extractAllTags(response.data)
                console.log("Fetched Data: ", response.data)
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data)
                }
                else {
                    console.log("Some error occurred. Try Again Later", error)
                }
            })
    }

    const extractAllTags = useCallback((projects) => {
        const setOfTags = new Set()
        projects.forEach(project => {
            project.tags.forEach(tag => setOfTags.add(tag))
        })
        setTags(Array.from(setOfTags))
    }, [])

    const scrollToExplore = () => {
        exploreRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        projects.length ?
            <div className='flex'>
                <div className="pt-20 shadow-xl h-[100vh] fixed w-[19%]">
                    <Link to='/NewProject'><button className="bg-[#3F5F4F] ml-3 text-sm text-white px-2 py-1.5 rounded">+ New</button></Link>
                    <form className='mt-2'>
                        <input type="text" placeholder="Search Here" className="pl-10 py-3 text-sm w-[250px] my-5 absolute bg-gray-100 left-[-15px] h-[30px] rounded-3xl border-transparent" />
                        <button className="z-[10] absolute bg-[#3F5F4F] text-slate-100 border-solid border-[#3F5F4F] border-2 py-1.5 px-3 left-[200px] mt-[20px] rounded-3xl rounded-l-none" ><img src={searchIcon} className='w-[15px]' /></button>
                    </form>
                    <p className='ml-3 mt-20 text-base text-slate-800 font-semibold'>Your Contributions:</p>
                    <div className='m-3 w-[240px] w-fit'>
                        {userProjects && userProjects.map(ele => (
                            <p key={ele._id} className='pb-0.5 ml-2 text-sm text-slate-800 hover:underline cursor-pointer'>{username}/<span>{ele.title}</span></p>
                        ))}
                    </div>
                </div>
                <div className='bg-[#F4F4F4] w-[81%] ml-[19%] px-10 pt-20'>
                    <form className='shadow-xl'>
                        <input type="text" placeholder="Search Here" className="pl-[70px] py-1.5 text-[15px] w-[400px] absolute left-[230px] rounded-3xl border-transparent" />
                        <button className="z-[10] absolute bg-[#3F5F4F] border-solid border-[#3F5F4F] border-2 py-1.5 px-3 left-[600px]  rounded-3xl rounded-l-none" ><img src={searchIcon} className='w-[16.5px]' /></button>
                    </form>
                    <h1 className='font-bold text-3xl mt-[70px]'>Dashboard</h1>
                    <p className='mt-1.5 text-sm'>Explore new projects and create your own too!</p>

                    <div className='bg-[#97D4A6] mt-5 w-full h-[150px] rounded relative py-5 px-5'>
                        <h1 className='text-3xl font-bold'>Hey! Let's see your <span className='text-[#3F5F4F]'> Stats</span></h1>
                        <div className='flex justify-center items-center w-fit'>
                            <img src={statsIcon} alt="stats" className='w-[60px] mt-3' />
                            <div className='w-2 h-[60px] bg-[#3F5F4F] ml-3 mt-3' />
                            <div className='text-sm text-smibold pl-3 pt-1.5'>
                                <p><span className='font-bold'>23</span> Likes</p>
                                <p><span className='font-bold'>23</span> Contributions</p>
                                <p><span className='font-bold'>23</span> Projects</p>
                            </div>
                        </div>
                        <img src={deVanGoghDoodle} alt="van-gogh" className='w-[200px] absolute right-0 top-[-50px]' />
                        <div className='bg-white bg-opacity-70 w-[300px] absolute right-[160px] top-[10%] rounded text-sm text-slate-700 py-3 px-5'>Great things are not done by impulse, but by a series of small things brought together. <div className='mt-3'>- Vincent Van Gogh </div></div>
                    </div>
                    <hr className="mt-5" />
                    <h1 className='font-bold text-2xl mt-8'>Your Latest Projects</h1>
                    <Link to={'/NewProject'}><button className="bg-[#3F5F4F] text-slate-100 text-sm border-solid border-[#3F5F4F] my-5 rounded border-2 py-1.5 px-3" >Add a new Project</button></Link>
                    <button className="text-[#3F5F4F] font-semibold text-sm border-solid border-[#3F5F4F] mx-3 my-5 rounded border py-1.5 px-3" onClick={scrollToExplore}>Contribute</button>
                    <div className='flex flex-wrap'>
                        {latestProjects.length ? latestProjects.map(project => (
                            <div className='bg-white m-3 rounded-xl w-[30%] px-5 py-8 shadow-lg flex flex-col justify-center'>
                                <div className='flex'>
                                    <img src={deBonaparte} alt="deBonaparte" className='rounded-full w-20 h-20 shadow-lg' />
                                    <div className='p-3'>
                                        <h1 className='font-bold text-lg'>{username}</h1>
                                        <p className='text-slate-700 text-[12px]'>Creative Writer, Author, Director</p>
                                    </div>
                                </div>
                                <h1 className='font-bold mt-5'>{project.title}</h1>
                                <p className='text-slate-700 text-sm'>{project.description}</p>
                            </div>
                        ))
                            :
                            <div className='m-auto'><img src={keatsDoodle} alt="AddSomeProjects" className='w-[200px] rounded' /> <p className='text-sm mt-5'>There are no projects to show!</p></div>}

                    </div>
                    <hr className="mt-5" />
                    <div className='flex justify-between items-center' ref={exploreRef}>
                        <h1 className='font-bold text-2xl mt-8'>Explore</h1>
                        <div className='flex'>
                            <select className='py-0.5 px-3 rounded h-fit' onChange={(e) => setFilter(prevFilter => ({
                                ...prevFilter, filterVal: e.target.value
                            }))}>
                                <option value='All'>All</option>
                                {allTags.map(tag => <option value={tag}>{tag}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        {filter.filteredProjects && filter.filteredProjects.map(project => (
                            <Link to={`/project/${project._id}`}> <div className='bg-white m-3 rounded-xl px-5 py-8 shadow-lg flex flex-col justify-center'>
                                <div className='flex'>
                                    <img src={deBonaparte} alt="deBonaparte" className='rounded-full w-20 h-20 shadow-lg' />
                                    <div className='p-3'>
                                        <h1 className='font-bold text-lg'>{project.projectOwnerName}</h1>
                                        <p className='text-slate-700 text-[12px]'>Creative Writer, Author, Director</p>
                                    </div>
                                    {project.tags.map(tag => (
                                        <button className='bg-gray-100 w-fit h-fit text-[14px] px-3 py-0.5 rounded ml-3 mt-1.5'>{tag}</button>
                                    ))}
                                    <button className='bg-[#3F5F4F] w-fit h-fit text-[14px] px-3 py-0.5 rounded ml-3 mt-1.5 text-white'>{project.status}</button>
                                </div>
                                <h1 className='font-bold mt-5'>{project.title}</h1>
                                <p className='text-slate-700 text-sm'>{project.description}</p>
                                <div>
                                    <button className='bg-[#3F5F4F] w-fit h-fit text-[13px] px-3 py-1.5 rounded mt-2 text-white'>View Project</button>
                                    <button className='text-[#3F5F4F] font-semibold border border-[1.5px] border-[#3F5F4F] text-[13px] px-3 py-[5px] rounded mt-2 ml-1.5'>About organisation</button>
                                </div>
                            </div> </Link>
                        ))
                        }
                    </div>
                </div>

            </div>
            : <Loader />
    )
}
export default UserDashboard

