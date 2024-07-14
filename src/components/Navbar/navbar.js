import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img  src={logo} className='logo'>
        </img>
        <div className="desktopmenu">
            <Link className="desktopMenuList">Home</Link>
            <Link className="desktopMenuList">About</Link>
            <Link className="desktopMenuList">Portfolio</Link>
            <Link className="desktopMenuList">Projects</Link>

        </div>
    <button className="desktopmenubtn">
        <img src={contactImg} alt="" className="desktopImg" />
      Contact Me</button>
    </nav>
  )
}

export default Navbar
