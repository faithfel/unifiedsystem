import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <Link>First</Link>
            <Link>Second</Link>
            <Link>Third</Link>
        </ul>
    </nav>
  )
}
