import EnergyData from "./EnergyData";

export default interface EnergyChartComponentProps {
  showSeptember: boolean;
  showAugust: boolean;
  chartData: EnergyData[];
}
