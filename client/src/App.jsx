import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
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
      </Routes>
    </>
  )
}

export default App
