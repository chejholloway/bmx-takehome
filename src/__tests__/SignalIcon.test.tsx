import React from "react";
import { render, screen } from "@testing-library/react";
import SignalIcon from "../components/Icons/SignalIcon";

describe("SignalIcon", () => {
  it("renders the SignalIcon component with the correct attributes", () => {
    render(<SignalIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("signal icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "signal-icon.png");
    expect(image).toHaveAttribute("width", "20");
    expect(image).toHaveAttribute("height", "20");
  });
});
