import React from 'react'

export const EmployeesList = () => {
  return (
    <div className='maincontent'>
      <h1 className="pagetitle">Employee List</h1>

      <a href="/addemployees" ><button className='addemployee'>Add Employee</button></a>
    </div>
  )
}

export default EmployeesList