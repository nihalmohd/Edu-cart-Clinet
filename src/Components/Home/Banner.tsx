import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosIntance } from "../../Api/config";

interface Banner {
  Image: string
  Content: string
  _id: string
  Status: boolean
}



const Banner: React.FC = () => {
  const [Banner, setBanner] = useState<Banner[]>([])
  const [showBanner,setShowbanner] = useState<boolean>()
  useEffect(() => {
    HandleBanners()
  }, [Banner])

  const HandleBanners = async () => {
    const { data } = await axiosIntance.post("/Admin/AdminShowBanner")
    const { Banner } = data
    console.log(Banner);
    setBanner(Banner)
  }

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
        {

        <Slider {...settings}>
          {
            
            Banner.map((item) =>
            item.Status ?
              <div className="img-container " >
                <img className="w-full h-[455px]" src={item.Image} alt="Banner" />
                <div className="w-[400px] h-48 ml-8  absolute top-1/2  text-white p-10 flex-col justify-center ">
                  <h1 className=" text-black text-xl font-extrabold" >{item.Content}</h1>
                  <h1 className=" text-black text-sm font-bold underline">Join With Us {item.Status}</h1>
                </div>
              </div>:
              ""
            )
          }

        </Slider>
        }
      </div>

    </div>
  )
}

export default Banner