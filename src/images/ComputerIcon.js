import React from "react";

function ComputerIcon({style}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 16 16"
      version="1.1"
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      width={style.width}
      height={style.height}>
      <path fill={style.fill} fillOpacity={style.fillOpacity} d="M14 0H2a2 2 0 00-2 2v9a2 2 0 002 2h3v2H3v1h10v-1h-2v-2h3a2 2 0 002-2V2a2 2 0 00-2-2zm-4 15H6v-2h4v2zm5-5H1V2c0-.552.449-1 1-1h12c.551 0 1 .448 1 1v8z"></path>
    </svg>
  );
}

export default ComputerIcon;
