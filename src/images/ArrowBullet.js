import React from "react"

export default function ArrowBullet({style, className, onClick}) {
    return (
      <svg
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={style.width}
        height={style.height}
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path fill={style.fill} d="M184.7 413.1l2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.1 101l-2.6-2.3C182 97 179 96 175.8 96c-8.7 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.3 0 6.4-1.1 8.9-2.9z"></path>
      </svg>
    );
  }
  
