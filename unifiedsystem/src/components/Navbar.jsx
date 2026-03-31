import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <ul>
            <Link to="/">Home</Link>
           <li> <Link to="/first">First</Link></li>
           <li> <Link to="/second">Second</Link> </li>
           <li> <Link to="/third">Third</Link> </li>
        </ul>
    </nav>
  )
}
