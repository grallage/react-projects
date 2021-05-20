import React from "react";
import {
  CloseIcon,
  SidebarBtnGroup,
  SidebarBtnSignin,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <CloseIcon />
      <SidebarMenu>
        <SidebarLink onClick={toggle} to="about">
          about
        </SidebarLink>
        <SidebarLink onClick={toggle} to="info">
          infomation
        </SidebarLink>
        <SidebarLink onClick={toggle} to="services">
          services
        </SidebarLink>
        <SidebarLink onClick={toggle} to="price">
          price
        </SidebarLink>
      </SidebarMenu>

      <SidebarBtnGroup>
        <SidebarBtnSignin to="/">Sign in</SidebarBtnSignin>
      </SidebarBtnGroup>
    </SidebarContainer>
  );
};

export default Sidebar;
