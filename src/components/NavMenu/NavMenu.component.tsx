import React from "react";

import {
  CurrentNavLink,
  NavLink,
  NavList,
  NavMenuStyles,
} from "../../styles/styles.component";
// Could use NAV_LINKS.map to create a NavLink component,
// const NAV_LINKS = ["DAY", "WEEK", "MONTH", "YEAR", "LIFETIME", "CUSTOM"]

function NavMenu() {
  return (
    <NavMenuStyles>
      <NavList>
        <NavLink>DAY</NavLink>
        <NavLink>WEEK</NavLink>
        <CurrentNavLink>MONTH</CurrentNavLink>
        <NavLink>YEAR</NavLink>
        <NavLink>LIFETIME</NavLink>
        <NavLink>CUSTOM</NavLink>
      </NavList>
    </NavMenuStyles>
  );
}

export default NavMenu;
