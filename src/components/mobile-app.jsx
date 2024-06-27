import React from 'react'
import MobApp from '../assets/images/mob-app.png'
import Store from '../assets/images/store-img.png'

export default function mobileApp() {
  return (
    <section className='sectionMb'>
      <div className="container">
        <div className="row dark-bg">
            <div className="col-6">
                <div className="mobile-img">
                    <img src={MobApp} alt="" />
                   
                </div>
            </div>
            <div className="col-6">
                <div className="mobile-conten">
                    <h3>Download <span className="blue-clr">Orbit jobs</span> app and find your dream job</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quas voluptates culpa officia obcaecati doloremque voluptatum.</p>
                    <img src={Store} alt="" className='store-img'/>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
