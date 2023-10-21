import React from "react";

import SignalIcon from "../Icons/SignalIcon";
import TriangleIcon from "../Icons/TriangleIcon";
import TargetIcon from "../Icons/TargetIcon";
import BatteryIcon from "../Icons/BatteryIcon";


function WirelessRow() {
  return (
    <section id="wireless_row" className="row bg-blue py-4 border-0">
      <div className="col">
        <div className="row pl-[5rem]">
          <div className="col-1">
            <span id="time" className="text-white">
              11:21
            </span>
          </div>
          <div className="col-3 relative left-4 top-1">
            <TargetIcon />
          </div>
        </div>
      </div>
      <div className="col-1 p-0 m-0 relative left-1">
        <figure>
          <SignalIcon />
        </figure>
      </div>
      <div className="col-1 p-0 m-0 relative left-1">
        <figure>
          <TriangleIcon />
        </figure>
      </div>
      <div className="col-1 p-0 m-0 relative left-1">
        <figure>
          <BatteryIcon />
        </figure>
      </div>
    </section>
  );
}

export default WirelessRow;
