import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { RouterContextProvider, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { First } from './components/First'
import { Second } from './components/Second'
import { Third } from './components/Third'
import { Route } from 'react-router-dom'

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
