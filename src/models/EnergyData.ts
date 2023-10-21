import DailyData from "./DailyData";

export default interface EnergyData {
  month: string;
  daily_data: DailyData[];
}
