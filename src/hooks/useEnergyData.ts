import useSWR from 'swr';
import EnergyData from '../models/EnergyData';

const URL= "https://my-json-server.typicode.com/chejholloway/energydata/energy_production";
export const useEnergyData = () => {
  const { data, error } = useSWR<EnergyData[]>(URL, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};
