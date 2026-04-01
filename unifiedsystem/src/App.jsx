import { useState } from 'react'
import './App.css'
import { RouterContextProvider, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { POS } from './components/POS'
import { Transaction } from './components/Transaction'
import { Stocks } from './components/Stocks'
import { EmployeesList } from './components/EmployeesList'
import { Departments } from './components/Departments'
import { Attendance } from './components/Attendance'
import { Leave } from './components/Leave'
import { Payroll } from './components/Payroll'
import { Categories } from './components/Categories'        


function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
