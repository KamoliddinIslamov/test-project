import React from 'react'
import { Link } from "react-router-dom"
import Sercul from "../rasimlar/sercul.png"
import Telifon from "../rasimlar/telifon.png"
import Vektor from "../rasimlar/vector.png";
function Navbar() {
    return (
        <div className='navbarTop'>
            <div className="navLink">
                <img src={Vektor} className="vector" />
                <Link to="/about" className='nav'>About</Link>
                <Link to="/home" className='nav'>Home</Link>
                <Link to="/contact" className='nav'>Contact</Link>
                <img src={Sercul} className="sercul" />
                <img src={Telifon} className="telifon" />
                <div className="raqamlar">
                    <a href="+998972441313">+998972441313</a><br />
                    <a href="+998946059696">+998946059696</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;