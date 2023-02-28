import {FaHome, FaBars, FaTimes, FaPhoneSquareAlt, FaToolbox, FaInfoCircle} from 'react-icons/fa'
import { Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './navbar.sass'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Projects from '../../pages/Projects'

const Navbar = () => {
  return (
    <>
        <nav className='sidebar'>
            <div className="sidebar_pic">

            </div>
            <div className="sidebar_menu">

            </div>
        </nav>
        <button className='mobileBtn'><FaBars /></button>
    </>
  )
}

export default Navbar