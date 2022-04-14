import React from "react";
import "./spotlights.css";
import Spotlight from "./Spotlight";

export default function Spotlights({ color = "#aaff1199" }) {
  return (
    <div className="spotlights-container">
      <Spotlight color={color} move={'40%'} />
      <Spotlight color={color} move={'60%'} />
    </div>
  );
}
