import React from "react";

function DatabaseIcon({ style }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={style.width}
            height={style.height}
            fill={style.fill}
            viewBox="0 0 448 512">
            <path fill={style.fill}
                fillOpacity={style.fillOpacity}
                d="M448 73.12v45.75C448 159.1 347.6 192 224 192S0 159.1 0 118.9V73.12C0 32.88 100.4 0 224 0s224 32.88 224 73.12zM448 176v102.9c0 40.2-100.4 73.1-224 73.1S0 319.1 0 278.9V176c48.12 33.12 136.2 48.62 224 48.62S399.9 209.1 448 176zm0 160v102.9c0 40.2-100.4 73.1-224 73.1S0 479.12 0 438.87V336c48.12 33.13 136.2 48.63 224 48.63S399.9 369.1 448 336z"></path>
        </svg>
    );
}

export default DatabaseIcon;