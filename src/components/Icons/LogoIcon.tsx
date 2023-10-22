import React from "react";
import { Image } from "../../styles/styles.component";

import logoIcon from "../../assets/images/logo-icon.png";

const iconHeight = "20%";
const imageWidth = "50%";
const logoAltText = "logo icon";

function LogoIcon() {
  return (
    <Image
      src={logoIcon}
      alt={logoAltText}
      width={imageWidth}
      height={iconHeight}
      className="relative right-10"
      style={{transform: 'scale(0.5)'}} />
  );
}

export default LogoIcon;
