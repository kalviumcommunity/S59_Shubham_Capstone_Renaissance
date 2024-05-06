import React from 'react'
import {ToastContainer } from 'react-toastify';
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
import './index.css'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<UserDashboard />} />
        <Route path='/NewProject' element={<NewProject />} />
        <Route path='/Loader' element={<Loader />} />
        <Route path='/welcome' element={<WelcomeLoader />} />
        <Route path='/project/:projectID' element={<ProjectInterface />} />
        <Route path='/newChapter/:projectID' element={<NewChapter />} />
        <Route path='/chapter/:chapterID' element={<ChapterInterface />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
