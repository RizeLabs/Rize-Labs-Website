
import React from "react";

// Simple hand-drawn style SVG logo
const Logo = () => (
  <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-black rounded-[14px] mr-4">
    <svg width="36" height="36" viewBox="0 0 36 36" className="block">
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <text
        x="18"
        y="23"
        textAnchor="middle"
        fontFamily="'Caveat', 'Comic Neue', cursive"
        fontSize="18"
        fill="black"
        style={{ fontWeight: 700, userSelect: "none" }}
      >
        R
      </text>
    </svg>
  </div>
);

export default Logo;
