import React, { useEffect, useState } from 'react'
import SidebarLeft from "./rasimlar/leftImg.png";
import Plyonka from "./rasimlar/plyonka.png";
import Tomchi from "./rasimlar/timchi.png";
import Consaner from "./rasimlar/consaner.png";
import Zachim from "./rasimlar/zachim.png";
import Acsesuarlar from "./rasimlar/acsesuarlar.png";
import ConsanerSovit from "./rasimlar/consanerSovit.png";
import Bulut from "./rasimlar/bulut.png";
import Bolgar from "./rasimlar/bolgar.png";
import Pomidors from "./rasimlar/pomidors.png";
import Tractor from "./rasimlar/tractor.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Botton from './toplam/botton';
function Sidebar() {
    const [lorem, setLorem] = useState(false)
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='sidebar'>
            <div className="sidebarLeft">
                <img src={SidebarLeft} />
            </div>
            <div className="sidebarRight">
                <div className="matn">
                    <h1><b>OUR PRODUCT</b></h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgeslar">
                    <div className="rasimLeft">
                        <div className="rasim1">
                            <img src={Plyonka} data-aos="flip-up" />
                            <div className="soz">
                                <h5><b>ASOSIY PLYONKA TURLARI</b></h5>
                                <p>Et magni et ea unde. Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                        <div className="rasim1">
                            <img src={Tomchi} data-aos="zoom-in-down" />
                            <div className="soz">
                                <h5><b>TOMCHILAB SUG'ORISH TIZIMI</b></h5>
                                <p>Et magni et ea unde.Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                        <div className="rasim1">
                            <img src={Consaner} data-aos="zoom-in" />
                            <div className="soz">
                                <h5><b>ISIQXONANING
                                    ISITISH TIZIMI </b></h5>
                                <p>Et magni et ea unde. Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rasimRight">
                        <div className="rasim1">
                            <img src={Zachim} data-aos="zoom-in" />
                            <div className="soz">
                                <h5><b>ISIQXONANING
                                    ISITISH TIZIMI </b></h5>
                                <p>Et magni et ea unde. Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                        <div className="rasim1">
                            <img src={ConsanerSovit} data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" />
                            <div className="soz">
                                <h5><b>ISIQXONANING
                                    ISITISH TIZIMI </b></h5>
                                <p>Et magni et ea unde.Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                        <div className="rasim1">
                            <img src={Acsesuarlar} data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" />
                            <div className="soz">
                                <h5><b>ISIQXONANING <br />
                                    ISITISH TIZIMI </b></h5>
                                <p>Et magni et ea unde.Corrupti quia adipisci qui dicta sint.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="textMatn">
                        <h1><b>LITTE ABOUT OUR COMPANY</b></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos aliquam vitae delectus laboriosam neque maiores, minus deleniti! Ducimus, cumque perspiciatis?</p>
                        <div className="button">
                            <button onClick={() => setLorem(!lorem)} className='btn btn-outline-success'>MORE ABOUT</button>
                            <span className='text-success ms-4'>OUR YOUTUBE</span>
                        </div>
                        {
                            lorem ? <Botton /> : null
                        }
                    </div>
                    <div className="photos">
                        <img src={Pomidors} className="pomidor" />
                        <img src={Bulut} className="bulut" />
                        <img src={Tractor} className="tractor" />
                        <img src={Bolgar} className="bolgar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;