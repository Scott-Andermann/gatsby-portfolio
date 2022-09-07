import React from "react";

function ThreeIcon({style}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="27 26 173.23 174.94"
      width={style.width}
      height={style.height}
    >
      <g
        fillRule="evenodd"
        stroke={style.fill}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        clipRule="evenodd"
      >
        <path fild={style.fill}d="M70.213 200.94L27 26l173.23 49.874z"></path>
        <path fild={style.fill}d="M113.583 50.942l21.591 87.496-86.567-24.945z"></path>
        <path fild={style.fill}d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zm86.012 24.777l10.724 43.465-43.008-12.346zm-64.555 62.13l10.724 43.465-43.008-12.346z"></path>
      </g>
    </svg>
  );
}

export default ThreeIcon;