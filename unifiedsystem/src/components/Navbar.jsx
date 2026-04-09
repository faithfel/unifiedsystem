import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <ul>
          
          <div className='linktext'>
            <li><Link className="link"to="/">Home</Link></li>
            <li><Link className="link" to="/pos">POS Terminal</Link></li>
            <li><Link className="link"to="/transactions">Transactions</Link></li>
            <li><Link className="link"to="/liststocks">List Stocks</Link></li>
            <li><Link className="link"to="/stocks">Stocks</Link></li>
            <li><Link className="link"to="/employees">Employees</Link></li>
            <li><Link className="link"to="/departments">Departments</Link></li>
            <li><Link className="link"to="/attendance">Attendance</Link></li>
            <li><Link className="link"to="/leave">Leave</Link></li>
            <li><Link className="link"to="/payroll">Payroll</Link></li>
            <li><Link className="link"to="/categories">Categories</Link></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar