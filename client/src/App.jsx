import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Loader from './components/Loaders/Loader'
import Register from './components/Register'
import WelcomeLoader from './components/Loaders/WelcomeLoader'
import UserDashboard from './components/UserDashboard'
import './index.css'
import './App.css'
import NewProject from './components/NewProject'
import ProjectInterface from './components/ProjectInterface'

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
        <Route path='/project' element={<ProjectInterface />} />
      </Routes>
    </>
  )
}

export default App
