import React from "react";
import { render, screen } from "@testing-library/react";
import ShareIcon from "../components/Icons/ShareIcon";

describe("ShareIcon", () => {
  it("renders the ShareIcon component with the correct attributes", () => {
    render(<ShareIcon />);

    // Check if the image is rendered
    const image = screen.getByAltText("share icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src), width, and height
    expect(image).toHaveAttribute("src", "share-icon.png");
    expect(image).toHaveAttribute("width", "50%");
    expect(image).toHaveAttribute("height", "20");
  });
});
