import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className='navbar'>
        

          <Link className="link"to="/">
            <div >
              <h2 className='homebutton'>
                Home
              </h2>
            </div>
          </Link>

        <div className='navtitle'>
          Point of Sale
        </div>

          <Link className="link" to="/pos">
            <div className='linktext'>
             POS Terminal
            </div>
          </Link>

          <Link className="link"to="/transactions">
            <div className='linktext'>
              Transactions
            </div>
          </Link>

          <Link className="link"to="/liststocks">
            <div className='linktext'>
              List Stocks
            </div>
          </Link>

          <Link className="link"to="/stocks">
            <div className='linktext'>
              Stocks
            </div>
          </Link>
          
        <div className='navtitle'>
          Employees
        </div>

          <Link className="link"to="/employees">
            <div className='linktext'>
              Employees
            </div>
          </Link>

          <Link className="link"to="/departments">
            <div className='linktext'>
              Departments
            </div>
          </Link>

          <Link className="link"to="/attendance">
            <div className='linktext'>
              Attendance
            </div>
          </Link>

          <Link className="link"to="/leave">
            <div className='linktext'>
              Leave
            </div>
          </Link>

          <Link className="link"to="/payroll">
            <div className='linktext'>
              Payroll
            </div>
          </Link>

          <Link className="link"to="/categories">
            <div className='linktext'>
            Categories
            </div>
          </Link>
    </nav>
  )
}

export default Navbar