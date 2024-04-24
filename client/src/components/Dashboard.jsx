import { useEffect, useState } from 'react'
import searchIcon from '../assets/search-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import deBonaparte from '../assets/deBonaparte.jpg'

function Dashboard() {
  const [userProjects, setUserProjects] = useState([])
  const [projects, setProjects] = useState([])
  const [allTags, setTags] = useState([])
  const [filter, setFilter] = useState({ filterVal: "All", filteredProjects: [] })

  useEffect(() => {
    fetchUserProjects("661f606b57b3c69e28a03516")
    fetchProjects()
  }, [])

  useEffect(() => {
    setFilter(prevFilter => ({
      ...prevFilter,
      filteredProjects: projects.filter(project => {
        if (filter.filterVal === "All") {
          return true
        }
        else {
          console.log(project.tags)
          console.log(filter.filterVal)
          return project.tags.includes(filter.filterVal)
        }
      })
    })
    )
  }, [filter.filterVal])

  const fetchUserProjects = (userID) => {
    axios.get(`https://renaissance-server.onrender.com/user/user-project/${userID}`)
      .then(response => {
        setFilter(prevFilter => ({
          ...prevFilter,
          filteredProjects: response.data
        }))
        setUserProjects(response.data)
        console.log("Fetched Data: ", response.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const fetchProjects = (userID) => {
    axios.get(`https://renaissance-server.onrender.com/project`)
      .then(response => {
        setProjects(response.data)
        extractAllTags(response.data)
        console.log("Fetched Data: ", response.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const extractAllTags = (projects) => {
    const setOfTags = new Set()
    projects.forEach(project => {
      project.tags.forEach(tag => setOfTags.add(tag))
    })
    setTags(Array.from(setOfTags))
  }

  return (
    <>
      <header className="sticky top-0 w-full flex justify-between bg-[#3F5F4F] p-5 items-center shadow-lg">
        <div className="text-white">
          <Link to='/'>
            <h1 className="text-2xl font-semibold">Renaissance</h1>
            <p className="text-sm font-light">Imagine. Write. Collaborate</p>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <div className="text-white">Shubham Thakur</div>
      </header>

      <div className="fixed bg-[#97D4A6] w-[240px] h-full">
        <Link to="/NewProject"><button className="bg-[#3F5F4F] text-[13px] text-slate-100 border-solid border-[#3F5F4F] mt-10 ml-3 rounded border-2 py-0.5 px-1.5" >+ New</button></Link>
        <h1 className='text-sm ml-3 mb-2 mt-5 text-slate-800 font-semibold'>Your contributions:</h1>
        <div>
          <input type="text" placeholder="Search Here" className="pl-7 py-1.5 text-sm w-[240px] absolute left-[-15px] rounded-3xl border-transparent" />
          <button className="z-[10] absolute bg-[#3F5F4F] border-solid border-[#3F5F4F] border-2 py-1.5 px-3 left-[185px]  rounded-3xl rounded-l-none" ><img src={searchIcon} className='w-[16.5px]' /></button>
        </div>
        <div className='text-[13px] mt-14 mx-1.5 w-[200px] flex flex-col justify-center items-center'>
          {userProjects && userProjects.map(ele => (
            <div key={ele._id} className='pb-0.5 ml-2'>
              <p className='hover:underline cursor-pointer'>Shubhh_Thakur/<span>{ele.title}</span></p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[80%] ml-[20%] mr-0 p-3'>
        <h1 className='text-xl font-bold text-[#3F5F4F] mt-5'>Explore</h1>
        <div className='w-[90%] h-[2px] bg-[#3F5F4F] mt-3' />
        <div className='flex justify-between'>
          <div className='w-[70%] pr-5 py-10'>
            {filter.filteredProjects && filter.filteredProjects.map(ele => (
              <div key={ele._id} className='shadow-lg bg-[#ace3ba] mt-5 p-5 border border-1.5 border-[#3F5F4F] rounded'>
                <div className='flex'>
                  <img src={deBonaparte} alt="deBonaparte" className='w-[80px] h-[80px] rounded-full ' />
                  <div className='pl-3 pt-1.5'>
                    <h1 className='text-slate-700 text-lg font-bold'>Shubhh_Thakur</h1>
                    <p className='text-[12px]'>Author, Poet, Creative writer</p>
                  </div>
                  {ele.tags.map(tag => (
                    <button className='bg-gray-100 w-fit h-fit text-[14px] px-3 py-0.5 rounded ml-3 mt-1.5' key={tag}>{tag}</button>
                  ))}
                  <button className='bg-[#3F5F4F] w-fit h-fit text-[14px] px-3 py-0.5 rounded ml-3 mt-1.5 text-white'>{ele.status}</button>
                </div>
                <div className='mt-3  pl-1.5' >
                  <h1 className='text-slate-600 text-[15px] font-bold'>{ele.title}</h1>
                  <div className='text-[14px]'>
                    {ele.description}
                  </div>
                </div>
                <button className='bg-[#3F5F4F] w-fit h-fit text-[13px] px-3 py-1.5 rounded mt-2 text-white'>View Project</button>
                <button className='text-[#3F5F4F] font-semibold border border-[1.5px] border-[#3F5F4F] text-[13px] px-3 py-[3px] rounded mt-2 ml-1.5'>About organisation</button>
              </div>
            ))}
          </div>
          <div className='w-[25%] h-[600px] bg-[#D6E7DA] mt-14 border border-t-1.5 border-[#3F5F4F]'>
            <h1 className='text-2xl font-bold text-[#3F5F4F] mt-5 ml-8'>Filters</h1>
            <div className='w-[85%] h-[1.4px] bg-[#3F5F4F] m-auto mt-1.5' />
            <div className='flex flex-col w-fit mx-5 ml-8'>
              <h1 className='text-lg font-semibold text-[#3F5F4F] mt-1.5'>Genre</h1>
              <button type="button" className="mt-1.5 text-left text-base hover:underline" value="All" onClick={(e) => setFilter(prevFilter => ({
                ...prevFilter, filterVal: e.target.value
              }))}>All</button>
              {allTags.map((tag, index) => (
                <button type="button" className="mt-1.5 text-left text-base hover:underline" value={tag} key={index} onClick={(e) => setFilter(prevFilter => ({
                  ...prevFilter, filterVal: e.target.value
                }))}>{tag}</button>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard
