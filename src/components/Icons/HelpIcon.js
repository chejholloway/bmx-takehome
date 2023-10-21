import React from "react";
import { Image } from "../../styles/styles.component";

import helpIcon from "../../assets/images/help-icon.png";

function HelpIcon() {
  const iconHeight = "20";
  const imageWidth = "50%";
  const helpAltText = "help icon";

  return (
    <Image
      src={helpIcon}
      alt={helpAltText}
      width={imageWidth}
      height={iconHeight}
    />
  );
}

export default HelpIcon;
