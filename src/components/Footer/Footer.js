import React from "react";
import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Footer() {
  return (
    <div className="Footer-main">
      <div className="Footer-con">
        <div className="Footer-content">
          <div className="Footer-box">
            <div className="fb-1">
              <img src="/img/header/logo.png" alt="" />
              <h1>تامینو</h1>
            </div>
            <div className="fb-2">
              <p>تهران خیابان ازادی</p>
              <p>تلفن:09125334870</p>
              <p>ایمیل hosseinemir79@gmail.com</p>
            </div>
            <div className="Footer-box-icons">
              <div>
                <TelegramIcon />
              </div>
              <div>
                <InstagramIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="Footer-box">
            <p className="Footer-box-title">لینک های مفید</p>
            <ul>
              <li>
                <ArrowDropDownIcon/>
                خانه</li>
              <li>
                <ArrowDropDownIcon/>
                درباره ما</li>
              <li>
                <ArrowDropDownIcon/>
                خدمات</li>
              <li>
                <ArrowDropDownIcon/>
                شرایط استفاده از خدمات</li>
              <li>
                <ArrowDropDownIcon/>
                سیاست حفظ حریم خصوصی</li>
            </ul>
          </div>
          <div className="Footer-box">
            <p className="Footer-box-title"> خدمات ما </p>
            <ul>
              <li>
                <ArrowDropDownIcon/>
                طراحی وبسایت</li>
              <li>
                <ArrowDropDownIcon/>
                توسعه وب </li>
              <li>
                <ArrowDropDownIcon/>
                مدیریت تولید</li>
              <li>
                <ArrowDropDownIcon/>
                بازار یابی </li>
              <li>
                <ArrowDropDownIcon/>
                 طراحی گرافیک</li>
            </ul>
          </div>
          <div className="Footer-box">
            <p className="Footer-box-title">خبرنامه ما</p>
            <p className="Footer-box-title-second">
              با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
              بود
            </p>
            <div className="Footer-input">
            <div className="input">
              <input type="text" />
            </div>
              <div className="btn">

              <button>دنبال کردن</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        این قالب بازنویسی قالب زیبای سایت کاسوکا بوده است و تمامی حقوق نزد این
        سایت محفوظ است
      </div>
    </div>
  );
}
