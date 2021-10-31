import React from 'react';
import a from '../../Images/brands/a.jpg'
import f from '../../Images/brands/f.png'
import b from '../../Images/brands/b.png'
import c from '../../Images/brands/c.jpg'
import d from '../../Images/brands/d.jpg'
import e from '../../Images/brands/e.png'

const Partner = () => {
    return (
        <div className="container my-5 ">
            <div className="text-center mb-5">
                <h1>OUR PARNER</h1>
            </div>
            <div className="partner pb-5">
                <img src={a} alt="" />
                <img src={f} alt="" />
                <img src={b} alt="" />
                <img src={c} alt="" />
                <img src={d} alt="" />
                <img src={e} alt="" />
            </div>
        </div>
    );
};

export default Partner;