import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="  flex justify-center items-centerp-2">
      <div className="w-full h-24 relative img-container" >
        
        <Slider {...settings}>
          <div className="img-container " >
            <img className="w-full h-[455px]" src="\Images\technical-studies-1.jpg" alt="Banner" />
            <div className="w-[400px] h-48 ml-8  absolute top-1/2  text-white p-10 flex-col justify-center ">
              <h1 className=" text-black text-xl font-extrabold" >Grow up your skills by online courses with Educart</h1>
              <h1 className=" text-black text-sm font-bold underline">Join With Us</h1>
            </div>

          </div>
          <div className="img-container " >
            <img className="w-full h-[455px]"  src="\Images\EducationLaptop01.jpg" alt="" />
            <div className="w-[400px] h-48 ml-8  absolute top-1/2  text-white p-10 flex-col justify-center ">
              <h1 className=" text-black text-xl font-extrabold" >Grow up your skills by online courses with Educart</h1>
              <h1 className=" text-black text-sm font-bold underline">Join With Us</h1>
              </div>
          </div>
          <div className="img-container " >
            <img className="w-full h-[455px]"  src="\Images\EducationLaptop01.jpg" alt="" />
            <div className="w-[400px] h-48 ml-8  absolute top-1/2  text-white p-10 flex-col justify-center ">
              <h1 className=" text-black text-xl font-extrabold" >Grow up your skills by online courses with Educart</h1>
              <h1 className=" text-black text-sm font-bold underline">Join With Us</h1>
              </div>
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default Banner