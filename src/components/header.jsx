import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
export default function header() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the mobile menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    };

  return  (
  <nav>
          <div className="container">
            <div className="navbar">
              <div className="nav-logo"><a href="."><img src={logo} alt="logo" /></a></div>
              <div className="nav-cont">
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#" onClick={closeMenu} className="active">Home</a></li>
                <li><a href="#About" onClick={closeMenu}>My Jobs</a></li>
                <li><a href="#">For Employers <i className="fa-solid fa-chevron-right"></i></a></li>
                <li className='displayDesktop'><a href="#" onClick={closeMenu}><i className="fa-regular fa-bell"></i></a></li>
                <li className='displayDesktop'><a href="#" onClick={closeMenu}><i className="fa-regular fa-user"></i></a></li>
            </ul>
            <ul className="nav-links">
                <li className="displayDesktop"><a href="#">For Employers <i className="fa-solid fa-chevron-right"></i></a></li>
            </ul>
            <ul className="icon-mbl displayMbl">
            <li><a href="#" onClick={closeMenu}><i className="fa-regular fa-bell"></i></a></li>
            <li><a href="#" onClick={closeMenu}><i className="fa-regular fa-user"></i></a></li>
            </ul>
            <div className="list-box">
                <i className="fa-solid fa-globe"></i>
                <select name="country">
                    <option value="en">EN</option>
                    <option value="in">IN</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div className={`burger ${isOpen ? 'cross' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
            </div>
          </div>
      </nav>
  )
}
