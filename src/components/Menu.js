import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Search from './Search';
export default function Menu({ args }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menus = [
    'Sign Up',
    'Sign In',
    'Games',
    'Live Dealers',
    'Sports',
    'Cyberspot',
    'Virtual Spot',
    'Live Spot',
    'Promotions',
    'Download App',
    'Support',
    'Language Support',
  ];
  return (
    <div>
      <Navbar color="" {...args} style={{ color: 'white' }}>
        <NavbarBrand href="/" style={{ color: 'white' }}>
          Boor<span style={{ color: '#2f79c9' }}>i</span>o
        </NavbarBrand>
        <div>
          <div className="gamingsupport">
            <span className="active">Gaming</span>
            <span>Support</span>
          </div>
          <Search />
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {menus.map((item) => {
              return (
                <>
                  <NavItem>
                    <NavLink href="/components/">{item}</NavLink>
                  </NavItem>
                </>
              );
            })}
          </Nav>
          <NavbarText>
            <a href="./register">Get Boorio Tokens</a>
          </NavbarText>
          <NavbarText>
            <a href="./register">Feena A.</a>
          </NavbarText>
          <NavbarText>
            <a href="./register">Sign Up</a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
