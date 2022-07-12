import React from 'react'
import icClose from '../assets/images/ic_close.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* OffCanvas */}
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    {/* Close Button */}
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">BCR</h5>
                        <img type="button" data-bs-dismiss="offcanvas" aria-label="Close" src={icClose} alt="" />
                    </div>
                    <div className="offcanvas-body 	d-lg-none ">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#services">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#whyus">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#faq">FAQ</a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <button className="btn btn-login btn-navbar-right">
                                <a href="/signup">Register</a>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/#services">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#whyus">Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#faq">FAQ</a>
                        </li>

                    </ul>

                    <a className='btn btn-login btn-navbar-right my-sm-0' href="/signup">
                        Register
                    </a>
                </div>
            </div>
        </nav>
    )
}
