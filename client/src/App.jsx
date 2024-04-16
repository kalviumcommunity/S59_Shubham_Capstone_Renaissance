import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import Register from './components/Register'
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
