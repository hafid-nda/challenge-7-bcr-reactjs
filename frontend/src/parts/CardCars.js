import React from 'react'

import iconUsers from '../assets/images/fi_users.png'
import iconSetting from '../assets/images/fi_settings.png'
import iconCalendar from '../assets/images/fi_calendar.png'

export default function CardCars(props) {
    const { cars } = props

    return (
        <section className="section-cars  d-flex justify-content-center mt-5">
            <div className="insert-card-cars row px-4">

                {cars.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card-cars">
                            <img className="cars-img " src={item.image} alt="" />
                            <div className="title-cars">
                                <h5>{`${item.manufacture} / ${item.model}`}</h5>
                                <h3>{`Rp ${item.rentPerDay} / hari`}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna
                                    aliqua.</p>
                            </div>
                            <div className="spec-cars">
                                <div className="spec-detail d-flex justify-content-start">
                                    <img className="spec-img" src={iconUsers} alt="" />
                                    <p className="align-self-center mb-0">{`${item.capacity} orang`}</p>
                                </div>
                                <div className="spec-detail d-flex justify-content-start">
                                    <img className="spec-img" src={iconSetting} alt="" />
                                    <p className="align-self-center mb-0">{item.transmission}</p>
                                </div>
                                <div className="spec-detail d-flex justify-content-start">
                                    <img className="spec-img" src={iconCalendar} alt="" />
                                    <p className="align-self-center mb-0">{`Tahun ${item.year}`}</p>
                                </div>
                            </div>
                            <div className="choose-cars">
                                <button className="btn btn-choose-cars">
                                    <a href="#">Pilih Mobil</a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )

}
