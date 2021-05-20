import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;

  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  text-transform: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #e7717d;
    transition: 0.2 ease-in-out;
  }
`;

export const SidebarBtnGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtnSignin = styled(LinkRouter)`
  border-radius: 25px;
  background: #14a76c;
  color: #fff;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  padding: 16px 64px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;
