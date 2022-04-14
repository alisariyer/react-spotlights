import React from "react";
import "./spotlights.css";
import Spotlight from "./Spotlight";

export default function Spotlights({ color = "#ffffff11" }) {
  return (
    <div className="spotlights-container">
      <Spotlight color={color} move={'45%'} delay={'0s'}/>
      <Spotlight color={color} move={'55%'} delay={'5s'}/>
    </div>
  );
}
