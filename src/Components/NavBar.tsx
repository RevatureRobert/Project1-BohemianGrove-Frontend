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
<<<<<<< HEAD
            <NavItem class="ml-auto">
=======
            <NavItem className="ml-auto">
>>>>>>> mohamed-hassan
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
<<<<<<< HEAD
                <DropdownItem href="/profile">
                  Profile
=======
                <DropdownItem href="/feed">
                  Feed
>>>>>>> mohamed-hassan
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