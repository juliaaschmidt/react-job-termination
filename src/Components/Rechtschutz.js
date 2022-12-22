import React from "react";
import { useState } from "react";

export default function Rechtschutz(props) {
  const [isEnsured, setEnsured] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    // setShow(false);
  };

  const handleNein = () => {
    setEnsured(false);
    props.parentCallback(false);
  };

  const handleJa = () => {
    setEnsured(true);
    props.parentCallback(true);
  };

  return (
    <div>
      <div className="userTxt">Haben Sie eine Rechtschutzversicherung?</div>
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
