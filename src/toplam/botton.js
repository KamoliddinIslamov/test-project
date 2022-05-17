import React, { useState } from 'react';
function Botton() {
    const [value, setValue] = useState()
    return (
        <div className='className' data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat fuga quaerat, maxime iure magni molestias minus obcaecati quo? A beatae amet architecto et unde doloremque tempore minima odio nobis illum sed quisquam molestiae officia fuga illo, est asperiores eveniet labore dignissimos assumenda dolorum neque magnam. Velit inventore debitis eius in!</h2>
            <h4>{value}</h4>
            <input type="text" placeholder='matn kiriting' className='form-control my-2' value={value} onChange={(e) => setValue(e.target.value)} />
            <button className='btn btn-outline-danger mb-5 form-control' type="submit">QO'SHISH</button>
        </div >
    );
}

export default Botton;
