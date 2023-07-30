import React from "react";
import "./Article3.css";
import Article3Box from "./Article3Box";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
export default function Article3() {
  const art3content = [
    {
      id: 1,
      icon: <EmojiEmotionsIcon sx={{ fontSize: 55 }} />,
      number: 65,
      text: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد",
    },
    {
      id: 2,
      icon: <AutoStoriesIcon sx={{ fontSize: 55 }} />,
      number: 65,
      text: "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند",
    },
    {
      id: 3,
      icon: <BrowseGalleryIcon sx={{ fontSize: 55 }} />,
      number: 65,
      text: "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد",
    },
    {
      id: 4,
      icon: <MilitaryTechIcon sx={{ fontSize: 55 }} />,
      number: 65,
      text: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.",
    },
  ];

  return (
    <div className="Article3-main">
      <div className="Article3-con">
        <img src="./img/articlepart/counts-img.jpg" alt="" />
        <div className="Article3-content">
          <h4>شایسته ترین لذت را به هر حال ارائه می دهد</h4>
          <p>
            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من
            به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد
            مقصر است
          </p>
          <div className="Article3-box-con">
            {art3content.map((item) => (
              <Article3Box text={item.text} number={item.number} key={item.id}>
                {item.icon}
              </Article3Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
