import React, { useState } from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function Header() {
  const [humMenu, setHumMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [sub2Menu, setSub2Menu] = useState(false);
  const [headerbackstyle,setHeaderBackStyle]=useState(true)
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
   
    if(scrollTop<200){
      setHeaderBackStyle(true)
    }else{
      setHeaderBackStyle(false)
    }
    
  });
  return (
    <div className={headerbackstyle===true ? 'header-con  ':"header-con header-con-back" }>
      <div className="header-logo">
        <img src="/img/header/logo.png" alt="logo" />
        <p>tamino</p>
      </div>
      <div className="header-nav">
        <nav className="main-nav">
          <ul className="main-ul">
            <li className="active-li-desktop">خانه</li>
            <li>درباره ما</li>
            <li>خدمات</li>
            <li>نمونه کار ها</li>
            <li>تیم</li>
            <li className="sub1-parent">
              <div className="subselector">
                لیست کشویی
                <KeyboardArrowDownIcon />
              </div>
              <ul className="sub1-con">
                <li>کشویی 1</li>
                <li className="sub2-parent">
                  <div>
                    کشویی عمیق
                    <KeyboardArrowLeftIcon />
                  </div>

                  <ul className="sub2-con">
                    <li>عمیق</li>
                    <li>عمیق</li>
                  </ul>
                </li>

                <li>کشویی 2</li>
              </ul>
            </li>

            <li>تماس با ما</li>
          </ul>
        </nav>
      </div>
      <div className="but-nav">
        <button>شروع</button>
        <div className="hum-nav-con">
          <div
            className="nav-span"
            onClick={() => {
              setHumMenu(!humMenu);
              setSubMenu(false);
              setSub2Menu(false);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={humMenu === true ? "hum-nav" : "d-n"}>
            <ul className="hum-ul">
              <li className="active-li">خانه</li>
              <li>درباره ما</li>
              <li>خدمات</li>
              <li>نمونه کار ها</li>
              <li>تیم</li>
              <li
                onClick={() => {
                  if (!subMenu) {
                    setSubMenu(true);
                    setSub2Menu(false);
                  } else {
                    setSubMenu(false);
                    setSub2Menu(false);
                  }
                }}
                className={subMenu === true ? "active-li sub-icon" : "sub-icon"}
              >
                لیست کشویی
                {subMenu === true ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </li>
              <ul className={subMenu === true ? "hum-ul2" : "d-n"}>
                <li>کشویی 1</li>
                <li
                  onClick={() => setSub2Menu(!sub2Menu)}
                  className={
                    sub2Menu === true ? "active-li sub-icon" : "sub-icon"
                  }
                >
                  کشویی عمیق
                  {sub2Menu === true ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </li>
                <ul className={sub2Menu === true ? "hum-ul3" : "d-n"}>
                  <li>عمیق</li>
                  <li>عمیق</li>
                </ul>
                <li>کشویی 2</li>
              </ul>
              <li>تماس با ما</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
