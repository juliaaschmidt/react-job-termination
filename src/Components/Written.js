import React from "react";
import "../Pages/Pages.css";
import { useState, useEffect } from "react";
export default function Written(props) {
  const [written, setWritten] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    // setShow(false);
    console.log("The link was clicked.");
  };

  const displayNein = () => {
    return <div className="userTxt">Wir können keine Abfindung für Sie erzielen</div>;
  };
  const handleNein = () => {
    setWritten(false);
    props.parentCallback(false);
    // props.parentCallback(written);
    // this.props.parentCallback("Data from child");
  };

  const handleJa = () => {
    setWritten(true);
    props.parentCallback(true);
  };

  return (
    <div>
      <div className="userTxt">
        Haben Sie die Kündigung schriftlich erhalten?
      </div>
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
        id="noButton"
        onClick={handleNein}
        className="neinbutton"
        // color="#1d3112"
      >
        Nein
      </button>
      {/* {isNein && displayNein()} */}
    </div>
  );
}
