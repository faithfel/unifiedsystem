import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { RouterContextProvider, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/first' element={<First />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
      </Routes>
    </>
  )
}

export default App
