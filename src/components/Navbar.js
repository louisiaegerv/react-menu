import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <p className='nav-title'>
          <span className='nav-title-icon'>🍽</span>
          React Menu
        </p>
      </Link>
      <div className='nav-links'>
        <Link to='/'>Menu</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
