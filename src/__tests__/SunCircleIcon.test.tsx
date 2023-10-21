import React from "react";
import { render, screen } from "@testing-library/react";
import SunCircleIcon from "../components/Icons/SunCircleIcon";

describe("SunCircleIcon", () => {
  it("renders the SunCircleIcon component with the correct attributes", () => {
    render(<SunCircleIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("sun circle icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "sun-circle.png");
  });
});
