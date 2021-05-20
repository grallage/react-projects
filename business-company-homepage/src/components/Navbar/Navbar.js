import React, { useState, useEffect } from "react";

import {
  Bars,
  MobileIcon,
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnGroup,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/">lynn</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="about"
            >
              about
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="info"
            >
              infomation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="services"
            >
              services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to="price"
            >
              price
            </NavLink>
          </NavItem>
        </NavMenu>

        <NavBtnGroup>
          <NavBtnLink to="/">contact me</NavBtnLink>
        </NavBtnGroup>

        <MobileIcon onClick={toggle}>
          <Bars />
        </MobileIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
