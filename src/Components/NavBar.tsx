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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand id="logo-text" href="/">
            <img src="/illuminati.ico" width="35px" height="35px"/>
            Bohemian Grove
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="container-fluid" navbar>
              <NavItem className="ml-auto">
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="ml-auto" navbar>
                <NavLink id="redirect-to-account-nav" href="/signin">Account</NavLink>
            <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="/signin">Sign In</NavLink>
              </NavItem>
              <UncontrolledDropdown  nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/settings">
                    Settings
                  </DropdownItem>
                  <DropdownItem href="/feed">
                    Feed
                  </DropdownItem>
                  <DropdownItem href="/logout">
                      Logout
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
}

export {};
export default NavigationBar;