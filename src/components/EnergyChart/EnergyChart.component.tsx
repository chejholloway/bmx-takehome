import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import EnergyChartComponentProps from "../../models/EnergyChartComponentProps";

import { ChartStyles } from "../../styles/styles.component";

const EnergyChartComponent: React.FC<EnergyChartComponentProps> = ({
  showSeptember,
  showAugust,
  chartData,
}) => {
  const chartBars = showSeptember
    ? chartData.find((entry) => entry.month === "September")?.daily_data || []
    : showAugust
    ? chartData.find((entry) => entry.month === "August")?.daily_data || []
    : [];

  return (
    <ChartStyles>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartBars}>
          <XAxis
            dataKey="day"
            interval={1}
            style={{
              fontSize: "11px",
              fontFamily: "BR Sonoma",
            }}
          />
          <YAxis
            type="number"
            ticks={[10, 20, 30, 40, 50, 60]}
            domain={[10, 60]}
            style={{
              fontSize: "11px",
              fontFamily: "BR Sonoma",
            }}
          />
          <Tooltip />
          {showSeptember && (
            <>
              <Bar dataKey="kWh" name="September" fill="#71c7e3" />
              {/*             <Bar dataKey='gap' stackId="a" fill='transparent' barSize={3} /> */}
            </>
          )}
          {showAugust && <Bar dataKey="kWh" name="August" fill="#82ca9d" />}
        </BarChart>
      </ResponsiveContainer>
    </ChartStyles>
  );
};

export default EnergyChartComponent;
