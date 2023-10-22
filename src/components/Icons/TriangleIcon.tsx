import React from "react";

import triangleIcon from "../../assets/images/triangle-icon.png";

function TriangleIcon() {
  const iconWidth = "20";

  return (
    <img
      className="h-auto inline-flex"
      src={triangleIcon}
      alt="triangle icon"
      width={iconWidth}
    />
  );
}

export default TriangleIcon;
