import React from "react";
import { useState } from "react";

export default function KuendigungscheckStart(props) {
  //   const [show, setShow] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    props.onClick(e);
    // setShow(false);
    console.log("The link was clicked.");
  };

  return (
    <div>
      {" "}
      <div>
        <span>
          <div className="userTxt">Ihr Arbeitgeber hat Ihnen gekündigt?</div>
        </span>
        <span>
          <div className="userTxt">
            Wir unterstützen Sie eine Abfindung von Ihrem Arbeitgeber zu
            erhalten. Zur Einschätzung Ihrer Erfolgschancen beantworten Sie
            bitte nachfolgende Fragen:
          </div>
        </span>
        <br></br>
        <button
          id="startButton"
          onClick={handleClick}
          className="button"
          color="#1d3112"
        >
          Kündigungscheck
        </button>
      </div>
    </div>
  );
}
