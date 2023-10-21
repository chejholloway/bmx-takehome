import React from "react";

import triangleIcon from "../../assets/images/triangle-icon.png";

function TriangleIcon() {
  const iconHeight = "20";
  const iconWidth = "20";

  return (
    <img
      className="h-auto"
      src={triangleIcon}
      alt="triangle icon"
      width={iconWidth}
      height={iconHeight}
    />
  );
}

export default TriangleIcon;
