import React from "react";
import {
  Figure,
  IconColumn,
  LogoColumn,
  LogoRowStyles,
} from "../../styles/styles.component";

import LogoIcon from "../Icons/LogoIcon";
import ShareIcon from "../Icons/ShareIcon";
import HelpIcon from "../Icons/HelpIcon";

function LogoRow() {
  return (
    <LogoRowStyles>
      <LogoColumn>
        <Figure>
          <LogoIcon />
        </Figure>
      </LogoColumn>
      <IconColumn>
        <Figure>
          <ShareIcon />
        </Figure>
      </IconColumn>
      <IconColumn>
        <Figure>
          <HelpIcon />
        </Figure>
      </IconColumn>
    </LogoRowStyles>
  );
}

export default LogoRow;
