import React from "react";
import { render, screen } from "@testing-library/react";
import LogoIcon from "../components/Icons/LogoIcon";

describe("LogoIcon", () => {
  it("renders the LogoIcon component with the correct attributes", () => {
    render(<LogoIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("logo icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "logo-icon.png");
    expect(image).toHaveAttribute("width", "50%");
    expect(image).toHaveAttribute("height", "20");
  });
});
