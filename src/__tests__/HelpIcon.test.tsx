import React from "react";
import { render, screen } from "@testing-library/react";
import HelpIcon from "../components/Icons/HelpIcon";

describe("HelpIcon", () => {
  it("renders the HelpIcon component with the correct attributes", () => {
    render(<HelpIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("help icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "help-icon.png");
    expect(image).toHaveAttribute("width", "20");
    expect(image).toHaveAttribute("height", "20");
  });
});
