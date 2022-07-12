import Google from '../parts/Google'
import React from 'react'
import LandingPage from '../assets/images/landingpage.png'

export default function SignIn() {

    return (
        <section className='sign pt-0'>
            <div className="row mx-0">
                <div className="col-7 align-self-center">
                    <div className="form-sign">
                        <a className='brand' href="/"></a>
                        <h2>Welcome Back!</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder='Contoh: johndee@gmail.com' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder='6+ karakter' />
                            </div>
                            <button type="submit" className="btn btn-sign">SignIn</button>
                            <Google />
                            <p className='to-signin'>Don’t have an account? &nbsp;
                                <a href="/signup">Sign Up for free</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-5">
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
