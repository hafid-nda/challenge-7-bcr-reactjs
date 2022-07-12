import React from 'react'
import iconFacebook from '../assets/images/icon_facebook.png'
import iconInstagram from '../assets/images/icon_instagram.png'
import iconTwitter from '../assets/images/icon_twitter.png'
import iconMail from '../assets/images/icon_mail.png'
import iconTwitch from '../assets/images/icon_twitch.png'


export default function Footer() {
    return (
        <footer className="section-footer mb-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-lg-3">
                                        <ul className="list-unstyled">
                                            <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                                            <li>binarcarrental@gmail.com</li>
                                            <li>081-233-334-808</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-2 ms-md-5">
                                        <ul className="list-unstyled">
                                            <li><a href="#services">Our Services</a></li>
                                            <li><a href="#whyus">Why Us</a></li>
                                            <li><a href="#testimonial">Testimonial</a></li>
                                            <li><a href="#faq">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-4 ">
                                        <ul className="list-unstyled">
                                            <li>Connect With Us</li>
                                            <li>
                                                <img src={iconFacebook} alt="" />
                                                <img src={iconInstagram} alt="" />
                                                <img src={iconTwitter} alt="" />
                                                <img src={iconMail} alt="" />
                                                <img src={iconTwitch} alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-2">
                                        <ul className="list-unstyled">
                                            <li>Copyright Binar 2022</li>
                                            <div className="navbar-brand" href="/"></div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
