import { useState } from 'react'
import './App.css'
import { RouterContextProvider, Routes } from 'react-router-dom'
import { Navbar, Home, First, Second, Third } from './components';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first' element={<First />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
      </Routes>
    </>
  )
}

export default App
