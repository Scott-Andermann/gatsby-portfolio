import React from "react";

function EmailIcon({style}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"     
        width={style.width}
        height={style.height}
        >
        <path fill={style.fill}
            d="M12.69 12.06a1 1 0 01-1.34 0L2.87 4.35A2 2 0 014 4h16a2 2 0 011.13.35z"
          ></path>
          <path
            fill={style.fill}
            d="M22 6.26V17a3 3 0 01-3 3H5a3 3 0 01-3-3V6.26l8.68 7.92a2 2 0 001.32.49 2 2 0 001.33-.51z"
          ></path>
        </svg>
      );
    }

export default EmailIcon;
