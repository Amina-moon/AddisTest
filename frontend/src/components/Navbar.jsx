import React from 'react';
// import styled from '@emotion/styled';
import Logo from '../assets/img/Logo.png'


import { NavItem, NavList, LogoImage, Navbarcontainer, } from './style';


const Navbar = () => {
  return (
    <Navbarcontainer>
    <a href="/">
          <LogoImage src={Logo} alt='Logo' />
        </a>
      <NavList>
        <NavItem>My PlayList</NavItem>


        <NavItem>Signup</NavItem>


        <NavItem>Login</NavItem>

      </NavList>
    </Navbarcontainer>

  );
};

export default Navbar;