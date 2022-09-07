import React from "react";

function ExitIcon({style}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      width={style.width}
    height={style.height}>
      <g>
        <circle cx="256" cy="256" r="253.44"></circle>
        <path
          fill={style.fill}
          d="M350.019 144.066l17.521 17.522c6.047 6.047 6.047 15.852 0 21.9L183.607 367.419c-6.047 6.048-15.852 6.047-21.9 0l-17.521-17.522c-6.047-6.047-6.047-15.852 0-21.9l183.932-183.933c6.048-6.046 15.853-6.046 21.901.002z"
        ></path>
        <path
          fill={style.fill}
          d="M367.54 349.899l-17.522 17.522c-6.047 6.047-15.852 6.047-21.9 0L144.186 183.488c-6.047-6.047-6.047-15.852 0-21.9l17.522-17.522c6.047-6.047 15.852-6.047 21.9 0L367.54 327.999c6.048 6.048 6.048 15.853 0 21.9z"
        ></path>
      </g>
    </svg>
  );
}

export default ExitIcon;