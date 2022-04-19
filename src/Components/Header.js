import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/home' className='link'>HOME</Link>
        <Link to='/about' className='link'>ABOUT</Link>
        <Link to='/contact' className='link'>Contact</Link>
    </div>
  )
}

export default Header