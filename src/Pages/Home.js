import React from "react";
import "./Pages.css";
import { useState, useEffect } from "react";
import BasicDatePicker from "../Components/BasicDatePicker";
import BasicDatePickerStart from "../Components/BasicDatePickerStart";
import moment from "moment";
import HorizontalLinearStepper from "../Components/HorizontalLinearStepper";

import Written from "../Components/Written";
import Employees from "../Components/Employees";
import Duration from "../Components/Duration";
import Salary from "../Components/Salary";
import KuendigungscheckStart from "../Components/KuendigungscheckStart";
import Rechtschutz from "../Components/Rechtschutz";
import NativePicker from "../Components/NativePicker";
import CalendlyPopup from "../Components/CalendlyPopup";

import CustomProgress from "../Components/CustomProgress";

export default function Home() {
  const [rerender, setRerender] = useState(false);
  const [show, setShow] = useState(true);
  const [weiter, setWeiter] = useState(false);
  const [isExpired, setExpired] = useState(false);
  const [weiterClicked, setWeiterClicked] = useState(false);
  const [isDate, setDateValue] = useState(null);
  const [isFormal, setIsFormal] = useState(null);
  const [isBigEnough, setIsBigEnough] = useState(null);
  const [isLongEnough, setIsLongEnough] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(null);
  const [clientEarnsEnough, setEarnsEnough] = useState(null);
  const [bruttoSalary, setBruttoSalary] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isEnsured, setIsEnsured] = useState(null);
  const [isAbfindungMin, setAbfindungMin] = useState(null);
  const [isAbfindungMax, setAbfindungMax] = useState(null);
  const [isLongEnoughByDate, setLongEnoughByDate] = useState(null);
  const [isNMonths, setNMonths] = useState(null);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const startOver = () => {
    setShow(true);
    setWeiter(false);
    setExpired(null);
    setWeiterClicked(false);
    setIsFormal(null);
    setDateValue(null);
    setIsBigEnough(null);
    setIsLongEnough(null);
    setQuestionNumber(null);
    setEarnsEnough(null);
    setIsEnsured(null);
    setAbfindungMax(null);
    setAbfindungMin(null);
    setStartDate(null);
    setBruttoSalary(null);
    setNMonths(null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
    setQuestionNumber(1);
    console.log("The link was clicked.");
  };

  const handleClickWeiter = (e) => {
    e.preventDefault();
    setWeiter(true);
    setWeiterClicked(true);
    setQuestionNumber(3);
    // setShow(false);
  };

  const checkExpired = (value) => {
    // if value > 3 weeks expired
    console.log(value); //.$d);

    setDateValue(value);
    const endDate = moment().startOf("day");
    console.log("end date: ", endDate);

    const startDate = moment([value.$y, value.$M, value.$D]);
    const start = `${value.$D}/${value.$M + 1}/${value.$y}`;
    console.log("start date: ", startDate);
    var result = endDate.diff(startDate, "days");
    // const diff = moment().diff(startDate);
    // console.log("diff ", diff);
    // const diffDuration = moment.duration(diff);

    // let result = diffDuration.days();
    console.log("date Converter result", result);
    setQuestionNumber(2);
    if (result > 21) {
      console.log("this date is expired.");
      setExpired(true);
    } else {
      setExpired(false);
    }
  };

  const isWritten = (val) => {
    console.log("Kuendigung schriftlich? ", val);
    setQuestionNumber(4);
    if (val) {
      setIsFormal(true);
    } else {
      setIsFormal(false);
    }
  };

  const enoughEmployees = (val) => {
    console.log(val);
    setQuestionNumber(5);
    if (val) {
      setIsBigEnough(true);
      return <div>LUCKY</div>;
    } else {
      setIsBigEnough(false);
      return (
        <div>Es tut uns leid, aber wir können Ihnen leider nicht helfen.</div>
      );
    }
  };

  const longEnough = (val) => {
    console.log(val);
    setQuestionNumber(6);
    if (val) {
      setIsLongEnough(true);
      //   return <div>LUCKY</div>;
    } else {
      setIsLongEnough(false);
      //   return (
      //     <div>Es tut uns leid, aber wir können Ihnen leider nicht helfen.</div>
      //   );
    }
  };

  const earnsEnough = (val) => {
    console.log(val);
    setBruttoSalary(val);
    setQuestionNumber(8);
    if (val > 1500) {
      setEarnsEnough(true);
      calcAbfindung(val);
    } else {
      setEarnsEnough(false);
    }
  };

  const ensured = (val) => {
    console.log(val);
    setQuestionNumber(9);
    if (val) {
      setIsEnsured(true);
      return <div>Wir koennen ihnen helfen</div>;
    } else {
      setIsEnsured(false);
      return <div>Bitte rufen Sie uns an unter: .</div>;
    }
  };

  function refreshPage() {
    setRerender(!rerender);
    startOver();
  }

  function checkSixMonthsAgain(val) {
    const endDate = moment([isDate.$y, isDate.$M, isDate.$D]);
    const startDate = moment([val.$y, val.$M, val.$D]);

    var nMonths = endDate.diff(startDate, "months");

    console.log("N months employed: ", nMonths);
    if (nMonths < 6) {
      setLongEnoughByDate(false);
    } else {
      setLongEnoughByDate(true);
    }
  }

  const storeStart = (val) => {
    setStartDate(val);
    setQuestionNumber(7);
    checkSixMonthsAgain(val);
    calcMonths(val);
  };

  const calcMonths = (val) => {
    const endDate = moment([isDate.$y, isDate.$M, isDate.$D]);
    const startDate = moment([val.$y, val.$M, val.$D]);

    var nMonths = endDate.diff(startDate, "months");

    console.log("N months employed: ", nMonths);
    setNMonths(nMonths);
  };

  const calcAbfindung = (bruttoSalary) => {
    // kuendiugngsDate: isDate
    let abfindungMin = ((bruttoSalary * isNMonths) / 12) * 0.5;
    let abfindungMax = ((bruttoSalary * isNMonths) / 12) * 0.75;
    console.log("abfindungsmax: ", abfindungMax);
    setAbfindungMax(abfindungMax);
    setAbfindungMin(abfindungMin);
  };

  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " €";
  }

  useEffect(() => {
    console.log("rerender");
  }, [isExpired]);

  return (
    <div className="style_classy top-element-formatting">
      <span></span>
      {questionNumber != null && (
        <CustomProgress
          percentprogress={Math.round((questionNumber / 9) * 100)}
        />
      )}
      <span>
        <div className="title formalTxtChecker">
          Sofortiger Online-Kündigungscheck
        </div>
      </span>
      <span>
        <div className="formalTxtChecker">
          {" "}
          {show && !questionNumber && (
            // question number must be 0
            <KuendigungscheckStart onClick={handleClick} />
          )}
          {questionNumber >= 1 && (
            <button className="button" onClick={refreshPage}>
              Neustart
            </button>
          )}
          {questionNumber == 1 && (
            <div className="userTxt">
              Wann haben Sie die Kündigung erhalten?
              <br></br>{" "}
              <div>
                <BasicDatePicker parentCallback={checkExpired} />
              </div>
            </div>
          )}
          {questionNumber == 2 && isExpired && (
            <div className="userTxt">
              Entschuldigung, wir können Ihnen leider nicht helfen. Ihre
              Kündigung liegt zu lange zurück.
            </div>
          )}
          {questionNumber == 2 && !isExpired && isDate && (
            <div>
              <br></br>
              <div className="userTxt">
                Sie haben Glück, Ihre Kündigung liegt noch nicht zu lange
                zurück.
              </div>
              <br></br>
              <button
                id="startButton"
                onClick={handleClickWeiter}
                className="button"
                color="#1d3112"
              >
                Weiter
              </button>
            </div>
          )}
          {questionNumber == 3 && weiterClicked && (
            <Written parentCallback={isWritten} />
          )}
          {questionNumber == 4 && isFormal && (
            <Employees parentCallback={enoughEmployees} />
          )}
          {questionNumber == 4 && !isFormal && isFormal != null && (
            <div className="userTxt">
              Wir können leider keine Abfindung für Sie erzielen.
            </div>
          )}
          {questionNumber == 5 && isBigEnough && (
            <Duration parentCallback={longEnough} />
          )}
          {questionNumber == 5 && !isBigEnough && isBigEnough != null && (
            <div className="userTxt">
              Wir können leider keine Abfindung für Sie erzielen.
            </div>
          )}
          {questionNumber == 6 && isLongEnough && (
            <div className="userTxt">
              Seit wann waren Sie bei Ihrem Arbeitgeber beschäftigt?
              <br></br>{" "}
              <div>
                <BasicDatePickerStart parentCallback={storeStart} />
              </div>
            </div>
          )}
          {questionNumber == 6 && !isLongEnough && isLongEnough != null && (
            <div className="userTxt">
              Wir können leider keine Abfindung für Sie erzielen.
            </div>
          )}
          {questionNumber == 7 &&
            (!isLongEnough || !isLongEnoughByDate) &&
            isLongEnough != null && (
              <div className="userTxt">
                Wir können leider keine Abfindung für Sie erzielen.
              </div>
            )}
          {questionNumber == 7 && isLongEnoughByDate && isLongEnough && (
            <Salary parentCallback={earnsEnough} />
          )}
          {questionNumber == 8 && clientEarnsEnough && (
            <Rechtschutz parentCallback={ensured} />
          )}
          {questionNumber == 8 &&
            !clientEarnsEnough &&
            clientEarnsEnough != null && (
              <div className="userTxt">
                Wir können leider keine Abfindung für Sie erzielen.
              </div>
            )}
          {/* {questionNumber== 9 && specialRe} insert specialReason here*/}
          {questionNumber == 9 && isEnsured && (
            <div className="userTxt">
              Gerne helfen wir Ihnen. Ihre Angelegenheit hat Aussicht auf
              Erfolg!
              <br></br>
              Ihre mögliche Abfindung beträgt:{" "}
              <p>
                {currencyFormat(isAbfindungMin)}-
                {currencyFormat(isAbfindungMax)}
              </p>
              <CalendlyPopup />
              <br></br>
              Kostenlose Ersteinschätzung Ihres Falles durch unsere Anwälte.
            </div>
          )}
          {questionNumber == 9 && !isEnsured && isEnsured != null && (
            <div className="userTxt">
              Bitte wenden Sie sich telefonisch an uns, um die Details Ihres
              Sachverhalts weiter zu erörtern.
              <br></br>
              <CalendlyPopup />
            </div>
          )}
        </div>
      </span>
      <div className="bottomspace"> </div>
    </div>
  );
}
