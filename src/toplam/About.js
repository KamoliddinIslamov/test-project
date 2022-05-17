import React from 'react'
import { Link } from "react-router-dom"
function About() {
    return (
        <div>
            <Link to="/about"></Link>
            <div className="about" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero ipsum tempore esse aliquam itaque nesciunt corrupti
                recusandae repudiandae repellendus obcaecati?
            </div>
        </div>
    );
}

export default About;