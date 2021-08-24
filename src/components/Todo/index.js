import React from "react";
import "./index.css";

export default function Todo({ text, clickHandler, done, title }) {
  return (
    <div className="todo" onClick={clickHandler} title={title}>
      <span className={done ? "done" : ""}>{text}</span>

      <img
        src={
          done
            ? "https://svgshare.com/i/_Rh.svg"
            : "https://svgshare.com/i/_TH.svg"
        }
        alt="check"
      />
    </div>
  );
}
