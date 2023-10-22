import React from "react";
import tw from "twin.macro";

import SignalIcon from "../Icons/SignalIcon";
import TriangleIcon from "../Icons/TriangleIcon";
import TargetIcon from "../Icons/TargetIcon";
import BatteryIcon from "../Icons/BatteryIcon";

const TargetIconStyles = tw.div`col relative right-6 top-[3px]`;
const TimeStyles = tw.div`text-white`;


function WirelessRow() {
  return (
    <section id="wireless_row" className="row bg-blue py-4 border-0">
      {/* start time and target icons */}
      <div className="col">
        <div className="row pl-[5rem]">
          <div className="col">
            <TimeStyles>
              11:21
            </TimeStyles>
          </div>
          <TargetIconStyles>
            <TargetIcon />
          </TargetIconStyles>
        </div>
      </div>
      {/* end time and target icons */}

      {/* start wireless icons */}
      <div className="col">
        <div className="row float-right relative left-[5px]">
          <div className="col relative left-8 top-[2px]">
            <SignalIcon />
          </div>
          <div className="col relative left-4">
            <TriangleIcon />
          </div>
          <div className="col">
            <BatteryIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WirelessRow;
