import React from "react";
import "../Pages/Pages.css";
import { Link, Router } from "react-router-dom";
import Beratungstermin from "./Beratungstermin";
import About from "./About";
import Reviews from "./Reviews";
import { Route, Routes } from "react-router";

const Pricing = () => {
  return (
    <div className="style_classy d-grid gap-3">
      {" "}
      {/* <span> */}
      <div className="title formalTxtChecker">Kosten</div>
      <div className="subtitle formalTxtChecker">Lohnt sich das?</div>
      <div className="formalTxtDatenschutz">
        Bei der Vergütung richten wir uns grundsätzlich nach den gesetzlichen
        Gebühren des Rechtsanwaltsvergütungsgesetzes (RVG). Für die Höhe der
        Gebühren ist der Gegenstandswert maßgeblich. Bei Kündigungen ist dies
        der Verdienst einschließlich Zulagen etc., den Sie in drei Monaten
        (Quartal) erzielen.
      </div>
      <div className="formalTxtDatenschutz">
        Um einen Überblick über anfallende Kosten zu erhalten, können Sie den{" "}
        <Link>Kostenrechner</Link> benutzen. Das Ergebnis ist für Sie eine erste
        überschlägige Einschätzung der zu zahlenden Vergütung.
      </div>
      <div className="formalTxtDatenschutz">
        Sollten Sie eine Rechtsschutzversicherung abgeschlossen haben, holen wir
        für Sie kostenlos die Deckungszusage ein. Sie müssen sich um nichts
        kümmern.
      </div>
      <div className="formalTxtDatenschutz">
        Als Fachanwälte verfügen wir über eine breite fachliche Spezialisierung
        und meistens weitergehende Kenntnisse und Fähigkeiten als Anwälte, die
        sich nicht auf das Fachgebiet Arbeitsrecht spezialisiert haben. Bei
        komplexen Sachverhalten oder Fällen, in denen eine überdurchschnittliche
        hohe Abfindung zu erwarten ist, erlauben wir uns im Einzelfall eine
        schriftliche Vergütungsvereinbarung mit Ihnen zu schließen. Dies wird
        jedoch im Voraus mit Ihnen besprochen.
      </div>
      <br></br>
      {/* </span> */}
      {/* <Routes>
        <Route path={`/Beratungstermin`} element={<Beratungstermin />} />
        <Route path={`/Erfahrungsberichte`} element={<Reviews />} />
        <Route path={`/About`} component={<About />} />
        {/* <Route path={`/Reviews`} component={<Reviews />} /> 
      </Routes> */}
      <div className="bottomspace"> </div>
    </div>
  );
};

export default Pricing;
