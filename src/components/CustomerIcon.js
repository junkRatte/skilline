import React from "react";

function CustomerIcon() {
  return (
    <div className="card-icon">
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_142:4)">
          <circle cx="90" cy="80" r="50" fill="#29B9E7" />
        </g>
        <path
          d="M71.25 77.25C74.2836 77.25 76.75 74.7836 76.75 71.75C76.75 68.7164 74.2836 66.25 71.25 66.25C68.2164 66.25 65.75 68.7164 65.75 71.75C65.75 74.7836 68.2164 77.25 71.25 77.25ZM109.75 77.25C112.784 77.25 115.25 74.7836 115.25 71.75C115.25 68.7164 112.784 66.25 109.75 66.25C106.716 66.25 104.25 68.7164 104.25 71.75C104.25 74.7836 106.716 77.25 109.75 77.25ZM112.5 80H107C105.487 80 104.121 80.6102 103.124 81.5984C106.587 83.4977 109.045 86.9266 109.578 91H115.25C116.771 91 118 89.7711 118 88.25V85.5C118 82.4664 115.534 80 112.5 80ZM90.5 80C95.8195 80 100.125 75.6945 100.125 70.375C100.125 65.0555 95.8195 60.75 90.5 60.75C85.1805 60.75 80.875 65.0555 80.875 70.375C80.875 75.6945 85.1805 80 90.5 80ZM97.1 82.75H96.3867C94.5992 83.6094 92.6141 84.125 90.5 84.125C88.3859 84.125 86.4094 83.6094 84.6133 82.75H83.9C78.4344 82.75 74 87.1844 74 92.65V95.125C74 97.4023 75.8477 99.25 78.125 99.25H102.875C105.152 99.25 107 97.4023 107 95.125V92.65C107 87.1844 102.566 82.75 97.1 82.75ZM77.8758 81.5984C76.8789 80.6102 75.5125 80 74 80H68.5C65.4664 80 63 82.4664 63 85.5V88.25C63 89.7711 64.2289 91 65.75 91H71.4133C71.9547 86.9266 74.4125 83.4977 77.8758 81.5984Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d_142:4"
            x="0"
            y="0"
            width="180"
            height="180"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="20" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.212 0 0 0 0 0.238778 0 0 0 0 0.533333 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_142:4"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_142:4"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default CustomerIcon;
