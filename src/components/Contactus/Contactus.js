import React from "react";
import "./Contactus.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
export default function Contactus() {
  return (
    <div className="Contactus-main">
      <div className="Contactus-con">
        <div className="Contactus-title">
          <h2>تماس با ما</h2>
          <span></span>
        </div>
        <h3>با ما تماس بگیرید</h3>
        
        <div className="Contactus-map"><iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103647.04770930226!2d51.4228224!3d35.7269504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684678557917!5m2!1sen!2s"
        ></iframe></div>
        <div className="Contactus-form-con">
          <div className="Contactus-data">
            <div className="Contactus-data-box">
              <div className="Contactus-icon">
                <LocationOnIcon/>
              </div>
              <div className="Contactus-text">
                <h4>مکان:</h4>
                <h3>تهران پاسداران</h3>
              </div>
            </div>
            <div className="Contactus-data-box">
              <div className="Contactus-icon">
                <EmailIcon/>
              </div>
              <div className="Contactus-text">
                <h4>ایمیل:</h4>
                <h3>hosseinemir79@gmail.com</h3>
              </div>
            </div>
            <div className="Contactus-data-box">
              <div className="Contactus-icon">
                <PhoneIphoneIcon/>
              </div>
              <div className="Contactus-text">
                <h4>تلفن:</h4>
                <h3>09125334870</h3>
              </div>
            </div>
          </div>
          <div className="Contactus-input">
            <input className="Contactus-input-name" type="text" placeholder="نام" />
            <input className="Contactus-input-email" type="email" placeholder="ایمیل" />
            <input className="Contactus-input-sub" type="text" placeholder="عنوان"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="Contactus-btn">

<button>ارسال پیام</button>
</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
