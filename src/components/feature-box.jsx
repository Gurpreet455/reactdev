import React from 'react'
import tech from '../assets/images/tech-rookie.png'
import transport from '../assets/images/transport.png'
import ball from '../assets/images/ball.png'
import risk from '../assets/images/risk.png'
import whiz from '../assets/images/whiz.png'
import avws from '../assets/images/avws.png'    
import uob from '../assets/images/uob.png'
import bandung from '../assets/images/bandung.png'
export default function featurebox() {
  return (
    <section className='feature-jobs sectionMb'>
        <div className="container">
          {/* section heading */}
          <div className="section-heading">
                <h4>Featured Job Offers</h4>
            </div>
        {/* section heading */}
        {/* feature jobs */}
        <div className="grid-row">
             {/* 1st */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={tech} alt="" className='mx-100'/>
                        </div>
                        <div className="feature-title">
                            <h4>Tech Rookie Internship Program (TRIP) - iOS Eng...</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>PT Midas Daya Teknologi</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 2nd */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={bandung} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Business Development Support - Bandung</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>Lalamove</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 3rd */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={ball} alt="" className='mx-100'/>
                        </div>
                        <div className="feature-title">
                            <h4>Program Management Officer - Multimedia Nusantara Poly...</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>Kompas Groupi</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 4th */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={avws} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Cyber Security Engineer</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>Group Avows</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 5th */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={whiz} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Visual Designer (Freelance)</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>Whiz (YC W22)</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 6th */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={risk} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Risk Manager</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>Juloi</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 7th */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={transport} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Logisly</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>PT Midas Daya Teknologi</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
            {/* 8th */}
            <div className="col-3">
            <div className="front-box">
                <div className="feature-box">
                    <div className="feature-intro">
                        <div className="feature-img">
                            <img src={uob} alt="" />
                        </div>
                        <div className="feature-title">
                            <h4>Capacity & Configuration</h4>
                        </div>
                        <div className="save-job">
                        <i className="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
                    <div className="feature-info">
                        <div className="intro-title"><h5>UOB</h5></div>
                        <div className="job-rating"><i className="fa-solid fa-star"></i> <span>4.1 | 50+ reviews</span></div>
                    </div>
                    <div className="feature-location">
                        <div className='ext-loc'>
                        <span><i className="fa-solid fa-briefcase"></i> Fresher</span>
                        <span><i className="fa-solid fa-location-dot"></i>Jakarta</span>
                        </div>
                        <span className='time'>23 hour ago</span>
                    </div>
                    <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                </div>
                 <div className="feature-hidden">
                 <div className="feature-data">
                    <ul>
                    <li>Tech Rookie Internship Program (TRIP) - Data Analyst Intern</li>
                    <li>Internship</li>
                    <li>Hybrid</li>
                    </ul>
                    </div>
                    <ul className='hidden-box-ul'>
                        <li>SQL</li>
                        <li>Attention to detail</li>
                        <li>Python</li>
                        <li>java</li>
                    </ul>
                    <button>Apply Now  <i className="fa-solid fa-chevron-right"></i></button>
                 </div>
                 </div>
            </div>
           
        </div>
        {/* feature jobs */}
        <button className='allJobs'>All Job Offers <i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
  )
}
