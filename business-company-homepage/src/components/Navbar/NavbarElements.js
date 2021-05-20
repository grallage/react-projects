import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  /* background: ${({ scrollNav }) => (scrollNav ? "transparent" : "#000")}; */
  height: 80px;

  margin-top: -80px;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  /* max-width: 1100px; */
  /* z-index: 1; */
`;

export const NavLogo = styled(LinkRouter)`
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin: auto 0 auto 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    margin: auto 0;
  }
`;

export const Bars = styled(FaBars)`
  color: white;
  cursor: pointer;
  font-size: 1.8rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLink = styled(LinkScroll)`
  color: white;
  text-transform: capitalize;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  &.active {
    /* color: #afd275; */
    border-bottom: 3px solid #afd275;
  }
`;

export const NavBtnGroup = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  text-transform: capitalize;
  text-decoration: none;
  color: white;
  padding: 10px 22px;
  border-radius: 20px;
  background: #14a76c;

  &:hover {
    background: white;
    color: #e7717d;
    transition: all 0.2s ease-in-out;
  }
`;
