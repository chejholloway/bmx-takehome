import React, { useState } from "react";

import { useEnergyData } from "../hooks/useEnergyData";

import WirelessRow from "../components/WirelessRow/WirelessRow.component";
import LogoRow from "../components/LogoRow/LogoRow.component";
import NavMenu from "../components/NavMenu/NavMenu.component";
import DatePickerRow from "../components/DatePickerRow/DatePicker.component";
import SunCircleRow from "../components/SunCircleRow/SunCircle.component";
import EnergyNumbers from "../components/EnergyNumbers/EnergyNumbers.component";
import FullScreenRow from "../components/FullScreenRow/FullScreenRow.component";
import EnergyChartComponent from "../components/EnergyChart/EnergyChart.component";
import TogglesComponent from "../components/Toggles/Toggles.component";
import FooterComponent from "../components/Footer/Footer.component";

import { BrightApp, Header, MainContent } from "../styles/styles.component";

const TakeHome: React.FC = () => {
  const [showSeptember, setShowSeptember] = useState(false);
  const [showAugust, setShowAugust] = useState(false);
  const { data, error, isLoading } = useEnergyData();

  const toggleSeptember = () => {
    setShowSeptember(!showSeptember);
    setShowAugust(false);
  };

  const toggleAugust = () => {
    setShowAugust(!showAugust);
    setShowSeptember(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (data) {
    return (
      <BrightApp>
        <Header>
          <WirelessRow />
          <LogoRow />
          <NavMenu />
        </Header>
        <MainContent>
          <DatePickerRow />
          <SunCircleRow />
          <EnergyNumbers />
          <FullScreenRow />
          <EnergyChartComponent
            showSeptember={showSeptember}
            showAugust={showAugust}
            chartData={data}
          />
          <TogglesComponent
            showSeptember={showSeptember}
            showAugust={showAugust}
            toggleSeptember={toggleSeptember}
            toggleAugust={toggleAugust}
          />
        </MainContent>
        <FooterComponent />
      </BrightApp>
    );
  }

  return <div>No data available.</div>;
};

export default TakeHome;
