import React from 'react'
import { useEffect, useState } from "react";
import iconPeople from '../assets/images/fi_people.png'
import CardCars from './CardCars';

// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

export default function FilterSearch() {

    const [type, setType] = useState("Pilih Tipe Driver");
    const [date, setDate] = useState("Pilih Waktu");
    const [time, setTime] = useState("8");
    const [passenger, setPassenger] = useState("");

    const dispatch = useDispatch();
    const stateCar = useSelector((stateCar) => stateCar);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (type !== "Pilih Tipe Driver") {
            const passsanger = passenger ? passenger : "0";
            const filter = { type, date, time, passsanger };
            dispatch(fetchUsers(filter));
        }
    };

    const handleType = (e) => {
        setType(e.target.value);
    };
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleTime = (e) => {
        setTime(e.target.value);
    };
    const handlePassenger = (e) => {
        setPassenger(e.target.value);
        // console.log(e);
    };

    useEffect(() => {
        console.log(stateCar.cars);
    }, [stateCar]);


    return (
        <>
            <section className="d-flex justify-content-center pt-0">
                <div className="section-search pt-0 ">
                    <h3 className="pencarianmu" id="pencarianmu" style={{ display: "none" }}>Pencarianmu</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex form-search justify-content-center mt-3 ">
                            <div className="row row-cols-lg-auto align-items-center">
                                <div className="col-12 col-md-6 mb-lg-0 search-option">
                                    <label className="form-label" htmlFor="typeDriver">Tipe Driver </label>
                                    <div className="input-group">
                                        <select className="form-select" value={type} required onChange={handleType} name="typeDriver" id="typeDriver">
                                            <option disabled hidden>
                                                Pilih Tipe Driver
                                            </option>
                                            <option value="Dengan Sopir">Dengan Sopir</option>
                                            <option value="Keyless Entry">Tanpa Sopir (Lepas Kunci)</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-lg-0 search-option">
                                    <label className="form-label" htmlFor="date">Tanggal</label>
                                    <div className="input-group">
                                        <input className="form-control" onChange={handleDate} required type="date" name="date" id="date" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-lg-0 search-option">
                                    <label className="form-label" htmlFor="time">Waktu Jemput/Ambil </label>
                                    <div className="input-group">
                                        <select className="form-select" value={time} onChange={handleTime} name="time" id="time">
                                            <option disabled hidden> Pilih Waktu </option>
                                            <option value="8">08.00 WIB</option>
                                            <option value="9">09.00 WIB</option>
                                            <option value="10">10.00 WIB</option>
                                            <option value="11">11.00 WIB</option>
                                            <option value="12">12.00 WIB</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-lg-0 search-option">
                                    <label htmlFor="passenger" className="form-label">Jumlah Penumpang (Optional)</label>
                                    <div className="input-group">
                                        <input id="passenger" name="passenger" type="number" className="form-control customsearchgroup" value={passenger} onChange={handlePassenger} placeholder="Jumlah Penumpang"
                                            aria-label="JumlahPenumpang" aria-describedby="basic-addon1" />
                                        <div className="input-group-text customsearchimg"><img src={iconPeople} alt="" /></div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-search submit">Cari Mobil</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {stateCar.cars && <CardCars cars={stateCar.cars} />}
        </>
    )
}
