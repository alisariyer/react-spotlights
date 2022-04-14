import React from "react";
import "./spotlights.css";
import Spotlight from "./Spotlight";

export default function Spotlights({ color = "#aaff1199", onTop = false }) {
  return (
    <div className={`spotlights-container ${onTop && 'reverse'}`}>
      <Spotlight position="left" color={color} move={'30%'} onTop={true}/>
      <Spotlight position="right" color={color} move={'70%'} onTop={true}/>
    </div>
  );
}
