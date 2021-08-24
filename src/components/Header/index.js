import React from "react";
import "./index.css";
import constants from "../.././constants/index.js";

export default function Header({ date }) {
  return (
    <div className="header">
      <div className="date-container">
        <h2>{date.getDate()}</h2>
        <div className="date">
          <h2>{constants.monthNames[date.getMonth()]}</h2>
          <span>{date.getFullYear()}</span>
        </div>
      </div>
      <div className="week">
        <h3>{constants.dayNames[date.getDay()]}</h3>
      </div>
    </div>
  );
}
