import React from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className=' absolute w-full px-6 pt-8 font-Barlow'>
      <div className='flex place-content-between'>
      <img src={logo} alt="SunnySide" />
        <Navbar/>
      </div>
    </header>
  )
}

export default Header