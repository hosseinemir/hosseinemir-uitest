import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Portfolio.css";
export default function Portfolio() {
  const [imgcol, setimgcol] = useState(1);
  const product = [
    { id: 1, img: "/img/productimg/p1.jpg", category: 4 },
    { id: 2, img: "/img/productimg/p2.jpg", category: 4 },
    { id: 3, img: "/img/productimg/p3.jpg", category: 4 },
    { id: 4, img: "/img/productimg/p4.jpg", category: 2 },
    { id: 5, img: "/img/productimg/p5.jpg", category: 2 },
    { id: 9, img: "/img/productimg/p9.jpg", category: 3 },
    { id: 6, img: "/img/productimg/p6.jpg", category: 2 },
    { id: 7, img: "/img/productimg/p7.jpg", category: 3 },
    { id: 8, img: "/img/productimg/p8.jpg", category: 3 },
  ];
  const buttons = [
    { id: 1, title: "همه" },
    { id: 2, title: "برنامه" },
    { id: 3, title: "محصول" },
    { id: 4, title: "اینترنت" },
  ];
  const [categorynum, setCategorynum] = useState(1);
  const [finalimg, setFinalimg] = useState([]);
  const changesizehandler = () => {
    const width = window.innerWidth;
    if (width > 1278) {
      setimgcol(3);
    } else if (width > 768) {
      setimgcol(2);
    } else {
      setimgcol(1);
    }
  };
  window.addEventListener("resize", () => {
    changesizehandler();
  });
  useEffect(() => {
    changesizehandler();
  }, []);
  useEffect(() => {
    if (categorynum === 1) {
      setFinalimg([...product]);
    } else {
      const filter = product.filter((item) => item.category === categorynum);
      setFinalimg([...filter]);
    }
  }, [categorynum]);
  return (
    <div className="Portfolio-main">
      <div className="Portfilo-con">
        <div className="Portfolio-title">
          <h3>نمونه کار ها</h3>
          <span></span>
        </div>
        <p className="Portfilo-con-p">نمونه کار های ما را برسی کنید</p>
        <div className="Portfolio-filter">
          {buttons.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCategorynum(item.id);
              }}
              className={categorynum === item.id ? "active" : ""}
            >
              {item.title}
            </button>
          ))}
        </div>

        <Box sx={{ width: "100%", height: "100%", overflowY: "hidden" }}>
          <ImageList variant="masonry" cols={imgcol} gap={8}>
            {finalimg.map((item) => (
              <ImageListItem className="img-con-port" key={item.id}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.id}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
