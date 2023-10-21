import React from "react";
import {
  Figure,
  FSRow,
  LeftColumn,
  RightColumn,
} from "../../styles/styles.component";

import FullScreenHandle from "../Icons/FullScreenHandle";

function FullScreenRow() {
  return (
    <FSRow>
      <LeftColumn>kWh</LeftColumn>
      <RightColumn>
        <Figure>
          <FullScreenHandle />
        </Figure>
      </RightColumn>
    </FSRow>
  );
}

export default FullScreenRow;
