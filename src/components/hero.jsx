import React from 'react'

export default function hero() {
  return (
    <header className="hero sectionMb">
      <div className="container">
        <div className="row">
          <div className="col-6 hero-content">
            <h1>Find the perfect job <span className="blk">for you</span></h1>
              <p>Search your career opportunity through 12,800 jobs</p>
              <div className="search-details">
                <input type="text" placeholder='Search by job title, company or keywords'/>
                <i className="fa-solid fa-location-dot"></i>
                <input type="text" placeholder='Province, city, or region' className='religion'/>
                <i className='fa-solid fa-magnifying-glass'></i>
              </div>
              <div className="dev-tabs">
                <h3>Popular Searches</h3>
                <span>Designer</span>
                <span>Writer</span>
                <span>Team leader</span>
                <span>Senior</span>
                <span>Web designer</span>
              </div>
          </div>
          <div className="col-6">
            
          </div>
        </div>
      </div>
    </header>
  )
}
