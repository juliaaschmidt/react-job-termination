import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router";
import { Link, Router } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import { useReducer } from "react";

import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Beratungstermin from "./Pages/Beratungstermin";
import Mission from "./Pages/Mission";
import Pricing from "./Pages/Pricing";
import Reviews from "./Pages/Reviews";
import Footer from "./Components/Footer";
import Datenschutz from "./Pages/Datenschutz";
import Impressum from "./Pages/Impressum";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import "./Pages/Pages.css";
import { StylesContext } from "@material-ui/styles";

function App() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  //   let backgroundContent;
  let [consent, setConsent] = useState(
    getCookieConsentValue("myAwesomeCookie")
  );
  //   let [backgroundContent, setBackgroundContent] = useState(
  //     <div className="cookie_background"></div>
  //   );

  //   let consent = getCookieConsentValue("myAwesomeCookie");
  console.log("cookie main: consent value: ", consent);

  //   if (consent) {
  //     setBackgroundContent(<div className="App"></div>);
  //   }

  //   usestate;
  //   let consentValue = getCookieConsentValue();

  //   function setBackground() {
  //     console.log(consentValue);

  //       backgroundContent = <div className="App"></div>;
  //     }
  //   }

  useEffect(() => {
    console.log("rerender");
  }, [consent]);

  //   console.log(CookieConsent.cookieValue);

  return (
    <div className="App style_classy flex-wrapper">
      {/* <header className="App-header"></header> */}
      <div className="main">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          {/* <Route path="/Mission" element={<Mission />} /> */}
          <Route path="Kosten" element={<Pricing />} />
          <Route path="Erfahrungsberichte" element={<Reviews />} />
          <Route path="Beratungstermin" element={<Beratungstermin />} />
          <Route path="Datenschutz" element={<Datenschutz />} />
          <Route path="Impressum" element={<Impressum />} />
        </Routes>
      </div>
      <div className="cookie">
        <CookieConsent
          //   debug={true}
          buttonText="AKZEPTIEREN"
          cookieName="myAwesomeCookie"
          style={{
            textAlign: "left",
            alignSelf: "flex-end",
            background: "black",
            textShadow: "2px 2px black",
          }}
          // buttonStyle={{"button"}}
          buttonStyle={{
            background: "#1d3112",
            //   "#1C3310",
            padding: "15px 26px",
            color: "white",
            fontFamily: "roboto",
            fontWeight: "bolder",
            fontSize: 22,
            textShadow: "2px 2px black",
          }}
          onAccept={() => {
            // let consent = getCookieConsentValue();
            // console.log("cookie consent value: ", consent);
            // setBackgroundContent(<div className="App"></div>);
            // console.log(resetCookieConsentValue());
            // console.log(this.props);
            // console.log("Cookiename", cookieName, "value; ", cookieValue);
            setConsent(true);
          }}
          expires={999}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeightL: "normal",
            }}
          >
            {" "}
            Diese Website benutzt Cookies. Bitte klicken Sie 'akzeptieren', um
            zu bestätigen, dass Sie mit der Nutzung von Cookies einverstanden
            sind. Bitte entnehmen Sie weitere Details unserer
            Datenschutzerklärung.
          </span>
          {/* This website uses cookies to enhance the user experience.{" "} */}
          {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
        </CookieConsent>
      </div>
      {consent ? <div></div> : <div className="cookie_background"></div>}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

// #2D4F1D

// #294D17

// #1F3912

// #1C3310
