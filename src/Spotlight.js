import React from "react";

export default function Spotlight({ color, move }) {
    const getRandomDelay = () => Math.floor(Math.random() * 5);
    const style = {
        left: move,
        animationDelay: `${getRandomDelay()}s`
    }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 328.93 1512"
      className="spotlight"
      style={style}
    >
      <g>
        <polygon
          fill={color}
          points="328.93 0 196.7 1512 168.12 1512 0 0 328.93 0"
        />
      </g>
    </svg>
  );
}
