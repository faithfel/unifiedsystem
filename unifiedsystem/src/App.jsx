import { useState } from 'react'
import './App.css'
import { RouterContextProvider, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { POSTerminal } from './components/POSTerminal'
import { Transaction } from './components/Transaction'
import { Stocks } from './components/Stocks'
import { Departments } from './components/Departments'
import { EmployeesList } from './components/EmployeesList'
import { Attendance } from './components/Attendance'
import { Leave } from './components/Leave'
import { Payroll } from './components/Payroll'
import { Categories } from './components/Categories'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pos' element={<POSTerminal />} />
        <Route path='/transactions' element={<Transaction />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/employees' element={<EmployeesList />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/leave' element={<Leave />} />
        <Route path='/payroll' element={<Payroll />} />
        <Route path='/categories' element={<Categories />} /> 
      </Routes>
    </>
  )
}

export default App
