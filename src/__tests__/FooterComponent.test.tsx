import React from "react";
import { render, screen } from "@testing-library/react";
import FooterComponent from "../components/Footer/Footer.component";

describe("FooterComponent", () => {
  it("renders the FooterComponent with the correct text", () => {
    render(<FooterComponent />);

    // Check if the text is rendered
    const footerText = screen.getByText("Made with ❤️ by Che' J. Holloway");
    expect(footerText).toBeInTheDocument();
  });

  it("renders the FooterContainer", () => {
    render(<FooterComponent />);

    // Check if the FooterContainer is rendered
    const footerContainer = screen.getByTestId("footer-container");
    expect(footerContainer).toBeInTheDocument();
  });

  it("renders the FooterText with the correct styles", () => {
    render(<FooterComponent />);

    // Check if the FooterText has the correct styles
    const footerText = screen.getByTestId("footer-text");
    expect(footerText).toHaveStyle("color: #FF");
  });
});
