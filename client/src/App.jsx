import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Landing-Page/Home'
import Loader from './components/Loaders/Loader'
import Register from './components/Auth-UI/Register'
import WelcomeLoader from './components/Loaders/WelcomeLoader'
import UserDashboard from './components/UserDashboard'
import NewProject from './components/Projects/NewProject'
import ProjectInterface from './components/Projects/ProjectInterface'
import NewChapter from './components/Projects/NewChapter'
import ChapterInterface from './components/Chapters/ChapterInterface'
import ForkedProjectInterface from './components/Projects/ForkedProjectInterface'
import RequestInterface from './components/UserAccount/RequestInterface';
import Account from './components/UserAccount/Account';
import GoogleAuth from './components/Loaders/GoogleAuth';
import getCookie from './utils/getCookie'
import './index.css'
import './App.css'

function App() {
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if (getCookie('accessToken')) {
      setLogin(true)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home isLogin={isLogin} />} />
        <Route path='/Register' element={<Register setLogin={setLogin} isLogin={isLogin} />} />
        <Route path='/Dashboard' element={isLogin ? <UserDashboard /> : <Register setLogin={setLogin} />} />
        <Route path='/NewProject' element={isLogin ? <NewProject /> : <Register setLogin={setLogin} />} />
        <Route path='/Loader' element={<Loader />} />
        <Route path='/welcome' element={<WelcomeLoader />} />
        <Route path='/project/:projectID' element={<ProjectInterface />} />
        <Route path='/newChapter/:projectName/:forkID' element={<NewChapter />} />
        <Route path='/chapter/:projectName/:chapterID' element={<ChapterInterface />} />
        <Route path='/forkedProject/:forkID' element={<ForkedProjectInterface />} />
        <Route path='/userAccount/:userID' element={<Account />} />
        <Route path='/request/:requestID' element={<RequestInterface />} />
        <Route path='/success' element={<GoogleAuth setLogin={setLogin} isLogin={isLogin} />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
