import React from 'react'
import fiCheck from '../assets/images/fi-check.png'
import imgService from '../assets/images/img_service.png'

export default function Services() {
    return (
        <section id="services" className="section-services row align-self-center">
            <div className="services-image text-center col-lg-6 col-sm-12 ">
                <img className="img-fluid " src={imgService} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 align-self-center services-right">
                <div className="services-heading">
                    <h2>Best Car Rental for any kind of trip in Lokasimu!
                    </h2>
                    <p>
                        Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga lebih
                        murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                        pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </p>
                </div>
                <div className="services-content ">
                    <div className="services-item ">
                        <img src={fiCheck} alt="" className="ic-check" />
                        <p className="description">
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                        </p>
                        <div className="clearfix "></div>
                    </div>
                    <div className="services-item">
                        <img src={fiCheck} alt="" className="ic-check" />
                        <p className="description">
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </p>
                        <div className="clearfix"></div>
                    </div>
                    <div className="services-item">
                        <img src={fiCheck} alt="" className="ic-check" />
                        <p className="description">
                            Sewa Mobil Jangka Panjang Bulanan
                        </p>
                        <div className="clearfix"></div>
                    </div>
                    <div className="services-item">
                        <img src={fiCheck} alt="" className="ic-check" />
                        <p className="description">
                            Gratis Antar - Jemput Mobil di Bandara
                        </p>
                        <div className="clearfix"></div>
                    </div>
                    <div className="services-item">
                        <img src={fiCheck} alt="" className="ic-check" />
                        <p className="description">
                            Layanan Airport Transfer / Drop In Out
                        </p>
                        <div className="clearfix"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}
