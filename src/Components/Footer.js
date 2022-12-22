import React from "react";
import "./Footer.css";
import "../Pages/Pages.css";
import { Link, Router } from "react-router-dom";

const Footer = () => (
  <div className="style_classy" align="left">
    <p> © FreshlyFired</p>
    {/* <p>Frankfurt 2022</p> */}
    <p>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/Datenschutz"}
        onClick={() => window.scrollTo(0, 0)}
      >
        Datenschutzerklärung
      </Link>{" "}
      |{" "}
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/Impressum"}
        onClick={() => window.scrollTo(0, 0)}
      >
        Impressum
      </Link>
    </p>
  </div>
);

export default Footer;
