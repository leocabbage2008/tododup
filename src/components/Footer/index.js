import React from "react";
import "./index.css";

export default function Footer({ onChange, subHandler }) {
  return (
    <div className="footer" action="#">
      <form onSubmit={(e) => subHandler(e)}>
        <input type="text" onChange={(e) => onChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
