import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './toplam/About';
import Contact from './toplam/Contact';
import Footer from './toplam/Footer';
import Home from './toplam/Home';
import Navbar from './toplam/Navbar';
import RasimTop from './toplam/RasimTop';
function RoutersDom() {
    return (
        <div className='div'>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
            <RasimTop />
        </div>
    );
}

export default RoutersDom;