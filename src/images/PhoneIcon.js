import React from "react";

function PhoneIcon({style}) {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width={style.width}
          height={style.height}
          >
          <path fill={style.fill} d="M32 2H16c-3.31 0-6 2.69-6 6v32c0 3.31 2.69 6 6 6h16c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 40h-8v-2h8v2zm6.5-6h-21V8h21v28z"></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
      );
    }

export default PhoneIcon;