import React, { Component } from 'react';
import { PopupWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import "../Pages/Pages.css"

const CalendlyPopup = () => {
  return (
    <div className="CalendlyPopup">
      <PopupButton
        className="button"
        url="https://calendly.com/freshlyfired/15min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Telefontermin vereinbaren"
      />
    </div>
  );
};


export default CalendlyPopup;