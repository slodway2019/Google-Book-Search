import React from "react";
import "./jumbo.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div 
      style={{ height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center"}}
      className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
