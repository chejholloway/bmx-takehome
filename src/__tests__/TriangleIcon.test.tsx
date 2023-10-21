import React from "react";
import { render, screen } from "@testing-library/react";
import TriangleIcon from "../components/Icons/TriangleIcon";

describe("TriangleIcon", () => {
  it("renders the TriangleIcon component with the correct attributes", () => {
    render(<TriangleIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("triangle icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "triangle-icon.png");
    expect(image).toHaveAttribute("width", "20");
    expect(image).toHaveAttribute("height", "20");
  });
});
