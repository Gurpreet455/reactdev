import React from 'react'
import Logo from '../assets/images/logo.png'
export default function footer() {
  return (
    <footer>
      <div className="container">
       <div className="footer-container">
       <div className="footer-content">
        <div className="footer-logo">
            <img src={Logo} alt="" />
        </div>
            <ul className='footer-links'>
                <li>Follow us on
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
                
            </ul>
        </div>
        <div className="footer-content">
              <h6>connect with us</h6>
            <ul>
                <li><a href="#"><i className="fa-regular fa-envelope"></i> info@orbitjobs.id</a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i> 12 24 232344</a></li>
            </ul>
        </div>
        <div className="footer-content">
             <h6>Quick Links</h6>
            <ul>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
        <div className="footer-content">
        <h6>Blogs</h6>
            <ul>
                <li><a href="#">For JobSeekers</a></li>
                <li><a href="#">For Employers</a></li>
             
            </ul>
        </div>
       </div>
       <div className="footer-copyright">
        <p>© 2024 <span className="blue-clr">orbit jobs</span> All rights reserved.</p>
       </div>
      </div>
    </footer>
  )
}
