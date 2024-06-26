import React from 'react'

export default function header() {
  return (
    <nav>
          <div class="container">
            <div class="navbar">
              <div class="nav-logo"><img src="" alt="" /></div>
                <ul class="nav-links">
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#Aout">My Jobs</a></li>
                    <li><a href="#">user</a></li>
                </ul>
                <ul class="nav-links">
                    <li><a href="$" class="active">For Employers</a></li>
                 
                </ul>
                <div class="info-box">
                  <div class="icons">
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-cart-shopping"></i></span>
                    <span><i class="fa-solid fa-user"></i></span>
                  </div>
                </div>
          <div class="burger" onclick="toggleMenu()">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
            </div>
          </div>
      </nav>
  )
}
