import React from "react";

export default function Article2box({ children, title, text }) {
  return (
    <div className="Article2box-main">
      {children}
      <div className="Article2box-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
