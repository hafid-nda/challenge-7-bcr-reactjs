import React from 'react'
import LandingPage from '../assets/images/landingpage.png'

export default function SignUp() {
    return (
        <section className='sign pt-0'>
            <div className=" row mx-0">
                <div className="col-7 align-self-center px-0">
                    <div className="form-sign">
                        <a className='brand' href="/"></a>
                        <h2>Sign Up</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="name" className="form-control" id="inputName" placeholder='Nama Lengkap' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder='Contoh: johndee@gmail.com' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Create Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder='6+ karakter' />
                            </div>
                            <button type="submit" className="btn btn-sign">SignUp</button>
                            <p className='to-signin'>Already have an account? &nbsp;
                                <a href="/signin">Sign In here</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-5 px-0">
                    <div className='right-header'>
                        <h1 className="title">
                            Binar Car Rental
                        </h1>
                        <img className='img-fluid' src={LandingPage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
