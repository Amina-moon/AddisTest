import React from 'react';
// import styled from '@emotion/styled';
import Logo from '../assets/img/Logo.png'
import { NavItem,NavLink,NavList,LogoImage } from './style';
// import { Link } from 'react-router-dom';


// const NavContainer = styled.nav`
//   padding: 16px;
//   border: 4px solid white
// `;

// const NavList = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0px;
//   overflow: hidden;
//   background-color: #f3f3f3;
//   border: 1px solid #e7e7e7;
//   position: -webkit-sticky; /* Safari */
//   position: sticky;
//   top: 0;
// `;

// const NavItem = styled.li`
//    float: right;
//    margin-right: 30px;
//    ${'' /* margin-bottom:14px */}
// `;

// const NavLink = styled.a`
//   color: #666;
//   display: block;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//  &:hover {
//     background-color: #ddd;
//   }
// `;

// const LogoImage = styled.img`
//   margin-left: 10px;
//   width: 125px;
//   height: auto; /* Maintain aspect ratio */
//   float: left;
// `;

const Navbar = () => {
  return (
    // <NavContainer>
      <NavList>
          <NavLink href="/">
            <LogoImage src={Logo} alt='Logo'/>
          </NavLink>
        <NavItem>
          <NavLink href="/contact">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">My-Playlist</NavLink>
        </NavItem>
      </NavList>
    // </NavContainer>
  );
};

export default Navbar;