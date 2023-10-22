import React from "react";

import {
  AugColumn,
  AugLabel,
  AugToggle,
  Input,
  Month,
  SeptColumn,
  SeptLabel,
  SeptToggle,
  SrOnlyPeer,
  TogglesSection,
} from "../../styles/styles.component";

import TogglesComponentProps from "../../models/TogglesComponentProps";

const TogglesComponent: React.FC<TogglesComponentProps> = ({
  showSeptember,
  showAugust,
  toggleSeptember,
  toggleAugust,
}) => {

  const SeptemberText = "September 2023";
  const AugustText ="August 2023";

  return (
    <TogglesSection>
      <SeptColumn>
        <SeptLabel>
          <Month>{SeptemberText}</Month>
          <Input
            type="checkbox"
            checked={showSeptember}
            onChange={toggleSeptember}
            value=""
            className={SrOnlyPeer}
          />
          <div className={SeptToggle}></div>
        </SeptLabel>
      </SeptColumn>
      <AugColumn>
        <AugLabel>
          <Month>{AugustText}</Month>
          <Input
            type="checkbox"
            checked={showAugust}
            onChange={toggleAugust}
            value=""
            className={SrOnlyPeer}
          />
          <div className={AugToggle}></div>
        </AugLabel>
      </AugColumn>
    </TogglesSection>
  );
};

export default TogglesComponent;
