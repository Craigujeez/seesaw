import React from "react";
import icons from "../assets/icon-sprite.svg";

const Icon = ({ id, height, width, ...props }) => {
  return (
    <svg width={width || "16px"} height={height || "16px"} {...props}>
      <use xlinkHref={`${icons}#${id} `} />
    </svg>
  );
}

export default Icon;