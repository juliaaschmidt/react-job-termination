import React from "react";
import mylogo from "../img/tmp_logo_minimal.png";
import "../Pages/Pages.css";
export default function LogoComponent() {
  return (
    <div>
      <img width="200px" src={mylogo} alt="image" />
    </div>
  );
}
