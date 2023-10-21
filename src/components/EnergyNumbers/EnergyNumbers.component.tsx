import React from "react";

import {
  AugDate,
  August,
  AugNumber,
  EnergyNumberStyles,
  SeptNumber,
  SeptDate,
  September,
  WattHours,
} from "../../styles/styles.component";

function EnergyNumbers() {
  return (
    <EnergyNumberStyles>
      <September>
        <SeptNumber>
          810.1
          <WattHours>kWh</WattHours>
        </SeptNumber>
        <SeptDate>September 2023</SeptDate>
      </September>
      <August>
        <AugNumber>
          1.1
          <WattHours>MWh</WattHours>
        </AugNumber>
        <AugDate>August 2023</AugDate>
      </August>
    </EnergyNumberStyles>
  );
}

export default EnergyNumbers;
