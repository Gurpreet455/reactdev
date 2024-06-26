import React from 'react'
import logo from '../assets/images/logo.png'
export default function header() {
  return  (
  <nav>
          <div className="container">
            <div className="navbar">
              <div className="nav-logo"><img src={logo} alt="logo" /></div>
              <div className="nav-cont">
                <ul className="nav-links">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#Aout">My Jobs</a></li>
                    <li><a href="#"><i className="fa-regular fa-bell"></i></a></li>
                    <li><a href="#"><i className="fa-regular fa-user"></i></a></li>
                </ul>
                <ul className="nav-links">
                    <li><a href="#">For Employers <i className="fa-solid fa-chevron-right"></i></a></li>
                </ul>
                <div className="list-box">
                <i className="fa-solid fa-globe"></i>
                <select name="country">
                    <option value="en">EN</option>
                    <option value="en">IN</option>
                    <option value="en">UK</option>
                </select>
                </div>
              </div>
          <div className="burger" onclick="toggleMenu()">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
            </div>
          </div>
      </nav>
  )
}
