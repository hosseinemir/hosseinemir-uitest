import React, {  useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./LogoSlider.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// import './styles.css';
export default function LogoSlider() {
  const imglinks = [
    { id: 1, img: "./img/kasuka logo/client-1.png" },
    { id: 2, img: "./img/kasuka logo/client-2.png" },
    { id: 3, img: "./img/kasuka logo/client-3.png" },
    { id: 4, img: "./img/kasuka logo/client-4.png" },
    { id: 5, img: "./img/kasuka logo/client-5.png" },
    { id: 6, img: "./img/kasuka logo/client-6.png" },
    { id: 7, img: "./img/kasuka logo/client-7.png" },
    { id: 8, img: "./img/kasuka logo/client-8.png" },
  ];
  const [logoCount, setLogoCount] = useState(6);
  
  const checkSize= ()=>{
    const width = window.innerWidth;
    if (width < 768) {
      setLogoCount(3);
    } else if (width < 1278) {
      setLogoCount(4);
    } else {
      setLogoCount(6);
    }
  }
  useEffect(()=>{
    checkSize()
  },[])
  
  
  window.addEventListener('resize',()=>{
    checkSize()
  })
  

  return (
    <div className="LogoSlider">
      <Swiper
        slidesPerView={logoCount}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {imglinks.map((item) => (
          <SwiperSlide key={item.id}>
            <img className="swiper-logo" src={item.img} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
