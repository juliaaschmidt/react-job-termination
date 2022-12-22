import React from "react";

import { ourStoryText } from "../Components/ourStoryText";
export default function Mission() {
  return (
    <div className="about-bubble">
      <div className="headline">
        Unternehmensphilosophie
        <span className="gold">{(<dynamic-variale />).goldTitle}</span>
        <span className="navy">{(<dynamic-variale />).navyTitle}</span>
      </div>
      {(<dynamic-variale />).text}
      <br />
    </div>
  );
}
