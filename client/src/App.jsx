import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Loader from './components/Loaders/Loader'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import WelcomeLoader from './components/Loaders/WelcomeLoader'
import './index.css'
import './App.css'
import NewProject from './components/NewProject'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/NewProject' element={<NewProject />} />
        <Route path='/Loader' element={<Loader />} />
        <Route path='/welcome' element={<WelcomeLoader />} />

      </Routes>
    </>
  )
}

export default App
