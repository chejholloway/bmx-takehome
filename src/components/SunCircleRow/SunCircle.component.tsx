import React from "react";

import {
  SCFigure,
  SunCircleColumn,
  SunCircleStyles,
  TextColumn,
  Title,
  Update,
} from "../../styles/styles.component";

import SunCircleIcon from "../Icons/SunCircleIcon";

function SunCircleRow() {
  const titleText = "Energy Produced";
  const updateText = "Updated 17 mins ago";

  return (
    <SunCircleStyles>
      <SunCircleColumn>
        <SCFigure>
          <SunCircleIcon />
        </SCFigure>
      </SunCircleColumn>
      <TextColumn>
        <Title>{titleText}</Title>
        <Update>{updateText}</Update>
      </TextColumn>
    </SunCircleStyles>
  );
}

export default SunCircleRow;
