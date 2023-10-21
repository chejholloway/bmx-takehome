import React from "react";
import { Image } from "../../styles/styles.component";

import fullScreenButton from "../../assets/images/fullscreen_handle.png";

function FullScreenHandle() {
  return <Image src={fullScreenButton} alt="fullscreen icon" width="25%" />
}

export default FullScreenHandle;