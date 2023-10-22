import React from "react";
import { Image } from "../../styles/styles.component";

import shareIcon from "../../assets/images/share-icon.png";

const shareAltText = "share icon";

function ShareIcon() {
  return (
    <Image className=" w-[20px] h-[20px]" src={shareIcon} alt={shareAltText} />
  );
}

export default ShareIcon;
