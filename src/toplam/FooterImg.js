import React from 'react'
import ImageFooter from "../rasimlar/imageFooter.png";
import Next from "../rasimlar/next.png";
import "../style/footerImage.css";
function FooterImg() {
    return (
        <div>
            <div className="imageFooter">
                <img src={Next} className="noun" />
                <img src={ImageFooter} className="image" />
                <img src={Next} className="next" />
            </div>
            <div className="iconca d-flex">
                <p className='p'><b>Trusted <br />by</b></p>
                <div className="microsoft">
                    {/* <img src={sd} /> */}
                    <h3><b>Microsoft</b></h3>
                </div>
                <h3><b>Google</b></h3>
                <div className="stack">
                    {/* <img src={dsf} /> */}
                    <h3><b>Stack</b></h3>
                </div>
                <div className="wordPress">
                    {/* <img src={dgyyii}/> */}
                    <h3><b>WordPress</b></h3>
                </div>
                <button className="nextUtish btn btn-outline-success pb-2">{`>`}</button>
            </div>
        </div>
    );
}

export default FooterImg;