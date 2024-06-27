import React from 'react'
import tech from '../assets/images/tech-rookie.png'
import transport from '../assets/images/transport.png'
import ball from '../assets/images/ball.png'
import risk from '../assets/images/risk.png'
import whiz from '../assets/images/whiz.png'
import avws from '../assets/images/avws.png'    
import uob from '../assets/images/uob.png'
import bandung from '../assets/images/bandung.png'
export default function compaines() {
  return (
    <section className='category-cont sectionMb'>
        <div className="container">
        {/* section heading */}
            <div className="section-heading">
                <h4>Find Best Companies</h4>
            </div>
        {/* section heading */}
            <div className="category-cont">
                <div className="grid-row">
                     {/* 1st */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={bandung} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Pegipegi</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                            <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 2nd */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={tech} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Kompas Group</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                           <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 3rd */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={transport} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Group Avows</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                           <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 4th */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                          <div className="comp-content">
                          <div className="category-img">
                                <img src={ball} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Lalamove</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                          </div>
                            <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 5th */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={risk} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>PT Midas Daya Teknologir</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                           <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 6th */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={whiz} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Siemens</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                            <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                     {/* 5th */}
                    </div>
                     {/* 7th */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={avws} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>eFishery</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                           <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                     {/* 8th */}
                    <div className="col-3">
                        <div className="company-box space-btw">
                           <div className="comp-content">
                           <div className="category-img">
                                <img src={uob} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Cermati</h6>
                                <p><i className="fa-solid fa-star"></i> 4.9 | 50+ reviews</p>
                            </div>
                           </div>
                            <div className="icon-box">
                            <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
