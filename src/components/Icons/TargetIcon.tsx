import React from "react";

import targetIcon from "../../assets/images/target-icon.png";

function TargetIcon() {
  const iconHeight = "20";
  const iconWidth = "20";

  return (
    <img
      className="h-auto  ml-2"
      src={targetIcon}
      alt="target icon"
      width={iconWidth}
      height={iconHeight}
      id="target-icon"
    />
  );
}

export default TargetIcon;
