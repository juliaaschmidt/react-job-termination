import React from "react";
import { Link } from "react-router-dom";
export const ourStoryText = {
  EN: {
    goldTitle: "Our",
    navyTitle: " Story",
    text: (
      <div>
        <p>
          text in English
          <a href="/resources/research">
            <strong>See the research.</strong>
          </a>
        </p>
        <br />
      </div>
    ),
  },
  ES: {
    goldTitle: "Nuestra",
    navyTitle: " Historia",
    text: (
      <div>
        <p>
          text in Spanish
          <a href="/resources/research">
            <strong>text in Spanish</strong>
          </a>
        </p>
        <br />
      </div>
    ),
  },
};
