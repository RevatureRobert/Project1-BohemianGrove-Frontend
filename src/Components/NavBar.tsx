import React, { useState } from 'react';
import '../Styles/NavBar.css';

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
  NavbarText
} from 'reactstrap';

const NavigationBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand id="logo-text" href="/">Bohemian Grove</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem class="ml-auto">
              <NavLink id="redirect-to-account" href="/signin">Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up!</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/settings">
                  Settings
                </DropdownItem>
                <DropdownItem href="/profile">
                  Profile
                </DropdownItem>
                <DropdownItem href="/logout">
                    Logout
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export {};
export default NavigationBar;