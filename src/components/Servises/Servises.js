import React from "react";
import "./Servises.css";
import ServisesBox from "./ServisesBox";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SpeedIcon from "@mui/icons-material/Speed";
import PublicIcon from "@mui/icons-material/Public";
import MonitorIcon from "@mui/icons-material/Monitor";
import FestivalIcon from "@mui/icons-material/Festival";

export default function Servises() {
  const Servisesboxcontent = [
    {
      id: 1,
      icon: <SportsBasketballIcon sx={{ fontSize: 30 }} />,
      title: "خرید و فروش",
      text: "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد",
    },
    {
      id: 2,
      icon: <StickyNote2Icon sx={{ fontSize: 30 }} />,
      title: "مشاهدات اولیه",
      text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
    },
    {
      id: 3,
      icon: <SpeedIcon sx={{ fontSize: 30 }} />,
      title: "سرعت بخشیدن به کار",
      text: "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم",
    },
    {
      id: 4,
      icon: <PublicIcon sx={{ fontSize: 30 }} />,
      title: "تامین جهانی",
      text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
    },
    {
      id: 5,
      icon: <MonitorIcon sx={{ fontSize: 30 }} />,
      title: "مانیتورینگ پیشرفته",
      text: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند",
    },
    {
      id: 6,
      icon: <FestivalIcon sx={{ fontSize: 30 }} />,
      title: "اصالت و هنر",
      text: "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد",
    },
  ];

  return (
    <div className="Servises-main">
      <div className="Servises-con">
        <div className="Servises-title">
          <p>خدمات</p>
          <span></span>
        </div>
        <h3>خدمات ما را برسی کنید</h3>
        <div className="Servises-box-con">
            {Servisesboxcontent.map(item=>(
                <ServisesBox key={item.id} text={item.text} title={item.title}>{item.icon}</ServisesBox>
            ))}
        </div>
      </div>
    </div>
  );
}
