import React from 'react'
import Navbar from '../parts/Navbar'
import Header from '../parts/Header'
import Services from '../parts/Services'
import Whyus from '../parts/Whyus'
import Testimonial from '../parts/Testimonial'
import Started from '../parts/Started'
import Faq from '../parts/Faq'
import Footer from '../parts/Footer'

export default function LandingPage() {
    return <>
        <Navbar />
        <Header isButton="yes" />
        <div className="container">
            <Services />
            <Whyus />
        </div>
        <Testimonial />
        <div className="container">
            <Started />
            <Faq />
        </div>
        <Footer />
    </>
}
