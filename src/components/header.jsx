import React from 'react'

export default function header() {
  return (
    <nav>
          <div className="container">
            <div className="navbar">
              <div className="nav-logo"><img src="" alt="" /></div>
                <ul className="nav-links">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#Aout">My Jobs</a></li>
                    <li><a href="#"><i className="fa-regular fa-bell"></i></a></li>
                </ul>
                <ul className="nav-links">
                    <li><a href="$" className="active">For Employers</a></li>
                 
                </ul>
                <div className="info-box">
                  <div className="icons">
                    <span><i className="fa-solid fa-heart"></i></span>
                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                    <span><i className="fa-solid fa-user"></i></span>
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
