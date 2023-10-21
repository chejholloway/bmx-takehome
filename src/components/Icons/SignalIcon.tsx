import React from "react";

import signalIcon from "../../assets/images/signal-icon.png";

function SignalIcon() {
  const iconHeight = "20";
  const iconWidth = "20";


  return (
    <img
      className="h-auto"
      src={signalIcon}
      alt="signal icon"
      width={iconWidth}
      height={iconHeight}
    />
  );
}

export default SignalIcon;
