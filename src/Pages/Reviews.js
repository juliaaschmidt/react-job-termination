import React from "react";
import "./Reviews.css";
import "./Pages.css";

export default function Reviews() {
  return (
    <div>
      <div className="title formalTxtChecker">Das sagen unsere Mandanten</div>
      <div className="formalTxt"></div>
      <div className="formalTxtDatenschutz">
        Freshly Fired ist eine neue Initiative und es liegen noch keine
        Mandatenbewertungen vor. Sobald erste Mandantenbewertungen vorliegen,
        werden sie hier erscheinen.
        <br></br>
        <br></br>
        Freshly Fired ist eine Initative der{" "}
        <a target="_blank" href="https://schwamborn-schmidt-heisig.de/">
          Schmidt & Kaup PartGmbB
        </a>
        . Die Kanzlei verfügt über jahrzehntelange Erfahrung und ist speziell
        auf Arbeitsrecht spezialisiert. Rechtsanwalt Bernd H. Schmidt ist
        Fachanwalt für Arbeitsrecht und berät sie kompentent in allen
        Rechtslagen. Sie finden aktuelle Mandantenbewertungen ganz einfach auf
        Google Reviews oder{" "}
        <a target="_blank" href="https://www.anwalt.de/bernd-schmidt">
          anwalt.de
        </a>
        <></>
      </div>
      <div className="bottomspace"> </div>
    </div>
  );
}
