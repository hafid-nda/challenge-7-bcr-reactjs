import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import rating from '../assets/images/rate.png'
import author1 from '../assets/images/testi_1.png'
import author2 from '../assets/images/testi_2.png'



export default function Testimonial() {
    return (
        <section id="testimonial" className="section-testimonial">
            <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="testimonial-heading text-center">
                    <h2>Testimonial</h2>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                {/* Item Carousel */}
                <OwlCarousel
                    nav={true}
                    navText={["<img src='./icons/ic_left.png'>",
                        "<img src='./icons/ic_right.png'>"]}
                    dots={false}
                    center={true}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={"2000"}
                    responsive={{
                        0: {
                            items: 1,
                            margin: 32,

                        },
                        540: {
                            items: 2,
                            margin: 80,

                        },
                        960: {
                            items: 2,
                            stagePadding: 30,
                        },
                        1140: {
                            items: 2,
                            stagePadding: 30,
                        }
                    }}
                >
                    <div className="card-testimonial row">
                        <div className="col-lg-3 col-md-12 col-sm-12 align-self-center">
                            <img className="author-img " src={author1} alt="" />
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 review">
                            <img className="rate-img" src={rating} alt="" />
                            <p className="text-review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
                                lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed
                                do eiusmod”
                            </p>
                            <p className="author">John Dee 32, Bromo</p>
                        </div>
                    </div>

                    <div className="card-testimonial row">
                        <div className="col-lg-3 col-md-12 col-sm-12 align-self-center">
                            <img className="author-img " src={author2} alt="" />
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 review">
                            <img className="rate-img" src={rating} alt="" />
                            <p className="text-review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed
                                do eiusmod”
                            </p>
                            <p className="author">John Dee 32, Bromo</p>
                        </div>
                    </div>

                    <div className="card-testimonial row">
                        <div className="col-lg-3 col-md-12 col-sm-12 align-self-center">
                            <img className="author-img " src={author1} alt="" />
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 review">
                            <img className="rate-img" src={rating} alt="" />
                            <p className="text-review">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                lorem ipsum
                                dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed
                                do eiusmod”
                            </p>
                            <p className="author">John Dee 32, Merapi</p>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section >
    )
}
