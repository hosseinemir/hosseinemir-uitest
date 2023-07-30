import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Speech.css";
export default function Speech() {
  const props = [
    {
      id: 1,
      img: "/img/parall/testimonials-1.jpg",
      name: "ساول گود من",
      title: "مدیرعامل",
      text: "برای توسعه تمام کار ها زحمات زیادی کشیده میشود",
    },
    {
      id: 2,
      img: "/img/parall/testimonials-2.jpg",
      name: "مرجان شریفان ",
      title: "توسعه دهنده وب",
      text: "نشانه های ک.چکی برای تصاحب جایگاه اصلی مورد نیاز است",
    },
    {
      id: 3,
      img: "/img/parall/testimonials-3.jpg",
      name: "عرفان برنج",
      title: "مدیر فروشگاه",
      text: "دریافت انچه برای ان میجنگیم از مصائب زیادی برخوردار است",
    },
    {
      id: 4,
      img: "/img/parall/testimonials-4.jpg",
      name: "امیرحسین کریمی",
      title: "رئیس هیئت مدیره",
      text: "نمیتوان بدون تلاش به جایگاه واقعی رسید",
    },
    {
      id: 5,
      img: "/img/parall/testimonials-5.jpg",
      name: "علی کریمی",
      title: "مدیر کل",
      text: "رضایت تمامی مشتریان و کارفرمایان در اولویت حرفه تمامی مشاغل است",
    },
  ];

  return (
    <div className="Speech-main">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
        
      >
        {props.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="Speech-slide">
              <img src={item.img} alt="" />
              <h2>{item.name}</h2>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
