import React from "react";

const BlobSVG: React.FC = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-40"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(255, 81.917, 0, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(255, 178.926, 53.357, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M19.3,-27.2C25.3,-26.3,30.5,-21.3,31.2,-15.5C31.9,-9.7,28,-3.1,27.4,4.3C26.9,11.7,29.7,19.9,28,27.1C26.2,34.2,19.9,40.1,12.9,40.6C6,41,-1.5,36,-7.4,31.4C-13.2,26.8,-17.3,22.7,-23.4,18.6C-29.6,14.6,-37.7,10.6,-41.2,4.2C-44.8,-2.1,-43.7,-10.8,-39,-16.5C-34.4,-22.3,-26.2,-25.1,-19.1,-25.6C-12,-26,-6,-24.1,0.3,-24.6C6.7,-25.1,13.4,-28.2,19.3,-27.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: "0.3s" }}
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
};

export default BlobSVG;
