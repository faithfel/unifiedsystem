import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <ul>
          <Link to="/">Home</Link>
          
            <li><Link to="/pos">POS Terminal</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/stocks">Stocks</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <li><Link to="/leave">Leave</Link></li>
            <li><Link to="/payroll">Payroll</Link></li>
            <li><Link to="/categories">Categories</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar