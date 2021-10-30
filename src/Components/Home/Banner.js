import React from "react";
import bannerBg from "../../Images/banner-bg.jpg";
import '../Style/globalStyle.css'

const Banner = () => {
  return (
    <div className="banner mb-5">
      <img src={bannerBg} alt="" />
      <div className="">
        <div className="row">
          <div className=" col-xl-6 col-md-7 col-sm-12 banner-title">
            <h1 className="text-white title">Your Advanture Travel</h1>
            <h1 className="text-white title">Extraordinary Place</h1>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
