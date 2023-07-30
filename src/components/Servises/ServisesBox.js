import React from "react";
import "./Servises.css";
export default function ServisesBox({ children, title, text }) {
  return (
    <div className="ServisesBox-con">
      <div className="ServisesBox-icon-con">{children}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
