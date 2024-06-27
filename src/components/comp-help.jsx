import React from 'react'
import aws from '../assets/images/comp5.png'
import ai from '../assets/images/comp3.png'
import sekh from '../assets/images/comp2.png'
import indus from '../assets/images/comp1.png'
export default function comphelp() {
  return (
    <section className='sectionMb'>
      <div className="container">
         {/* section heading */}
         <div className="section-heading justify-center">
                <h4>We've helped <span className="blue-clr">2000+</span> world's best companies</h4>
            </div>
        {/* section heading */}
            <div className="companies-images">
              <img src={aws} alt="" />
              <img src={ai} alt="" />
              <img src={sekh} alt="" />
              <img src={indus} alt="" />
            </div>
      </div>
    </section>
  )
}
