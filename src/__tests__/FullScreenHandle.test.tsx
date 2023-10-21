import React from "react";
import { render, screen } from "@testing-library/react";

import FullScreenHandle from "../components/Icons/FullScreenHandle";

describe("FullScreenHandle", () => {
  it("renders the FullScreenHandle component with the correct attributes", () => {
    render(<FullScreenHandle />);

    // Check if the image is rendered
    const image = screen.getByAltText("fullscreen icon");
    expect(image).toBeInTheDocument();

    // Check the image source (src) and width
    expect(image).toHaveAttribute("src", "fullscreen_handle.png");
    expect(image).toHaveAttribute("width", "25%");
  });
});
