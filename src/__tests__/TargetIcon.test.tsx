import React from "react";
import { render, screen } from "@testing-library/react";
import TargetIcon from "../components/Icons/TargetIcon";

describe("TargetIcon", () => {
  it("renders the TargetIcon component with the correct attributes", () => {
    render(<TargetIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("target icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "target-icon.png");
    expect(image).toHaveAttribute("width", "20");
    expect(image).toHaveAttribute("height", "20");
  });
});
