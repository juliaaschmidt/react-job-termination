import React from "react";
import "../Pages/Pages.css";
import { useState } from "react";
export default function Duration(props) {
  const [isNein, setNein] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    // setShow(false);
    console.log("The link was clicked.");
  };

  const displayNein = () => {
    return (
      <div className="userTxt">Wir können keine Abfindung für Sie erzielen</div>
    );
  };
  const handleNein = () => {
    // setNein(true);
    props.parentCallback(false);
  };

  const handleJa = () => {
    // setNein(false);
    props.parentCallback(true);
  };

  return (
    <div>
      <div className="userTxt">Waren Sie länger als 6 Monate beschäftigt?</div>
      <br></br>
      <button
        id="startButton"
        onClick={handleJa}
        className="button"
        color="#1d3112"
      >
        Ja
      </button>
      <button
        id="startButton"
        onClick={handleNein}
        className="neinbutton"
        color="#1d3112"
      >
        Nein
      </button>
      {/* {isNein && displayNein()} */}
    </div>
  );
}
