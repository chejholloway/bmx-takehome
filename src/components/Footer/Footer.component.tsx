import React from "react";

import { FooterContainer, FooterText } from "../../styles/styles.component";

const FooterComponent = () => {
  const text = "Made with ❤️ by Che' J. Holloway";

  return (
    <FooterContainer data-testid="footer-container">
      <FooterText data-testid="footer-text">{text}</FooterText>
    </FooterContainer>
  );
};

export default FooterComponent;
