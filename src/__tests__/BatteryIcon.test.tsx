import React from "react";
import { render, screen } from "@testing-library/react";
import BatteryIcon from "../components/Icons/BatteryIcon";

describe("BatteryIcon", () => {
  it("renders the BatteryIcon component with the correct attributes", () => {
    render(<BatteryIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("battery icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "battery-icon.png"); // Replace with the actual path
    expect(image).toHaveAttribute("width", "20");
    expect(image).toHaveAttribute("height", "20");
  });
});
