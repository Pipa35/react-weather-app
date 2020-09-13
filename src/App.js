import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/filipa-pinho-2a7a322a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filipa Pinho
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Pipa35/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
