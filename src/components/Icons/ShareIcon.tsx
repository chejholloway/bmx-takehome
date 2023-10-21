import React from "react";
import { Image } from "../../styles/styles.component";

import shareIcon from "../../assets/images/share-icon.png";

const iconHeight = "20";
const imageWidth = "50%";
const shareAltText = "share icon";

function ShareIcon() {
  return (
    <Image
      src={shareIcon}
      alt={shareAltText}
      width={imageWidth}
      height={iconHeight}
    />
  );
}

export default ShareIcon;
