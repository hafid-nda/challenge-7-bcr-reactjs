import React, { Component } from 'react'
import Navbar from '../parts/Navbar'
import Header from '../parts/Header'
import FilterSearch from '../parts/FilterSearch'
import Footer from '../parts/Footer'



export default class Cars extends Component {

    render() {
        return <>
            <Navbar />
            <Header />
            <div className='container'>
                <FilterSearch />
            </div>
            <Footer />
        </>

    }

}
