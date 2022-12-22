import React from "react";
import NativePicker from "../Components/NativePicker";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

import { Route, Routes } from "react-router";
import CalendlyPopup from "../Components/CalendlyPopup";
import moment from "moment";
import "./Pages.css";
import About from "./About";
import Pricing from "./Pricing";
import Reviews from "./Reviews";

const Beratungstermin = () => {
  let tomorrow = moment().add(1, "days");
  var endTime = `${tomorrow}T17:40`;
  var startTime = `${tomorrow}T09:00`;
  //   function disableWeekends(date) {
  //     return date.getDay() === 0 || date.getDay() === 6;
  //   }

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setShow(false);
  //     setQuestionNumber(1);
  //     console.log("The link was clicked.");
  //   };

  return (
    <div className="style_classy">
      {" "}
      <span>
        <div className="title formalTxtChecker">
          Kostenlosen Telefontermin vereinbaren
        </div>
        <br></br>
        <div className="userTxt">
          Jetzt kostenlose Ersteinschätzung Ihres Falles durch unsere Anwälte
          sichern:
        </div>
        <div className="userTxt">
          <CalendlyPopup />
        </div>
      </span>
      {/* <div className="userTxt" align="center">
        <NativePicker
          disablePast={true}
          minDate={tomorrow}
          minTime={startTime}
          maxTime={endTime}
          //   hintText="Weekends Disabled"
          //   shouldDisableDate={disableWeekends}
        />

      </div> */}
      {/* <Routes>
        <Route path={`Kosten`} element={<Pricing />} />
        <Route path={`/Erfahrungsberichte`} element={<Reviews />} />
        <Route path={`About`} component={<About />} /> */}
      {/* <Route path={`/Reviews`} component={<Reviews />} />
      </Routes> */}
    </div>
  );
};

export default Beratungstermin;
