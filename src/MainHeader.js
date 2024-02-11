import "./CSS/App.css";
import logo from "./Icons/Logo.png";
import accounting from "./Icons/accounting.png";
import savings from "./Icons/save-money.png";
import graph from "./Icons/bar-chart.png";
import { useState } from "react";
function MainHeader() {
  return (
    <div className="App">
      <header className="main-header">
        <img src={logo} />
        <div className="Links">
          <a href="http://www.google.com">
            ACCOUNTING
            <img src={accounting} alt="" />
          </a>
          <a href="http://www.google.com">
            SAVINGS
            <img src={savings} alt="" />
          </a>
          <a href="http://www.google.com">
            GRAPHS
            <img src={graph} alt="" />
          </a>
        </div>
        <div className="Account">
          <a href="http://www.google.com">LOG IN</a>
          <a href="http://www.google.com">CREATE ACCOUNT</a>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default MainHeader;
