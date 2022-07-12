import React from 'react'
import ImageCar from "../assets/images/img_car.png";
import BgCar from "../assets/images/bg_car.png";

function CheckButton(props) {
    const { isButton } = props
    if (isButton === "yes") {
        return (
            <a href="/cars" className="btn btn-get-started">
                Mulai Sewa Mobil
            </a>
        )
    } else {
        return (
            <></>
        )
    }
}


function Header(props) {
    const { isButton } = props
    return (
        <header>
            <div className="container-fluid">
                <div className="row ">
                    <div className="hero col-lg-6 col-sm-12 pt-lg-5">
                        <h1>
                            Sewa & Rental Mobil Terbaik di Kawasan Lokasimu
                        </h1>
                        <p style={{ paddingRight: 150 }}>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                            untuk sewa mobil selama 24 jam.
                        </p>
                        <CheckButton isButton={isButton} />
                    </div>
                    <div className="img-car col-lg-6 col-sm-12 px-0 d-flex justify-content-end">
                        <img className="position-relative bg-car mt-auto" src={BgCar} alt="" />
                        <img className="position-absolute car-right img-fluid " src={ImageCar} alt="" />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header
