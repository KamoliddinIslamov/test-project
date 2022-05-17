import React from 'react'
import Arow from "../rasimlar/arow.png";
function Footer() {
    return (
        <div>
            <div className="text">
                <b><h1 style={{ marginTop: "70px" }}>Lorem ipsum dolor sit.</h1></b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className='btn btn-warning text-white'>EXPLORE  <img src={Arow} /></button>
            </div>
        </div>
    );
}

export default Footer;