import React from 'react'
import markt from '../assets/images/markt.png'
import design from '../assets/images/design.png'
import webdev from '../assets/images/web-dev.png'
import content from '../assets/images/content-icon.png'
export default function category() {
  return (
    <section className='category-cont sectionMb'>
        <div className="container">
        {/* section heading */}
            <div className="section-heading">
                <h4>Search by Category</h4>
                <div className="catr-btn">
                    <a href="#">All Category <i className="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>
        {/* section heading */}
            <div className="category-cont">
                <div className="grid-row">
                     {/* 1st */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={markt} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Business Development</h6>
                                <p>2 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 2nd */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={design} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Designing</h6>
                                <p>3 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 3rd */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={webdev} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Development</h6>
                                <p>2 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 4th */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={content} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Content writer</h6>
                                <p>3 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 5th */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={content} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Content writer</h6>
                                <p>3 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 6th */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={webdev} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Development</h6>
                                <p>2 Openings</p>
                            </div>
                        </div>
                     {/* 5th */}
                    </div>
                     {/* 7th */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={markt} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Business Development</h6>
                                <p>2 Openings</p>
                            </div>
                        </div>
                    </div>
                     {/* 8th */}
                    <div className="col-3">
                        <div className="catergory-box">
                            <div className="category-img">
                                <img src={design} alt="" />
                            </div>
                            <div className="category-content">
                                <h6>Designing</h6>
                                <p>3 Openings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
