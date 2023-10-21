import React from "react";

import { SCImage } from "../../styles/styles.component";

import sunCircleIcon from "../../assets/images/sun-circle.png";

function SunCircleIcon() {
  const altText = "sun circle icon";

  return <SCImage src={sunCircleIcon} alt={altText} />;
}

export default SunCircleIcon;
