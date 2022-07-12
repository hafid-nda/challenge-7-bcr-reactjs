import React from 'react'
import iconComplete from '../assets/images/icon_complete.png'
import iconPrice from '../assets/images/icon_price.png'
import iconClock from '../assets/images/icon_24hrs.png'
import iconMedal from '../assets/images/icon_professional.png'

export default function Whyus() {
    return (
        <section id="whyus" className="section-why">
            <div className="why-heading">
                <h2>Why Us?</h2>
                <p>Mengapa Harus Pilih Binar Car Rental?</p>
            </div>
            <div className="why-content row justify-content-center">
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div className="card-why d-flex flex-column">
                        <img src={iconComplete} alt="" className="why-icon" />
                        <h3>Mobil Lengkap</h3>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div className="card-why d-flex flex-column">
                        <img src={iconPrice} alt="" className="why-icon" />
                        <h3>Harga Murah</h3>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div className="card-why d-flex flex-column">
                        <img src={iconClock} alt="" className="why-icon" />
                        <h3>Layanan 24 Jam</h3>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div className="card-why d-flex flex-column">
                        <img src={iconMedal} alt="" className="why-icon" />
                        <h3>Sopir Profesional</h3>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
