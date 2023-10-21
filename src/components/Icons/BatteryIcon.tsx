import React from "react";

import batteryIcon from "../../assets/images/battery-icon.png";

function BatteryIcon() {
  const iconHeight = "20";
  const iconWidth = "20";

  return (
    <img
      className="h-auto"
      src={batteryIcon}
      alt="battery icon"
      width={iconWidth}
      height={iconHeight}
    />
  );
}

export default BatteryIcon;
