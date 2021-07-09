import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
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
} from 'reactstrap';

const NavigationBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useHistory().pathname;
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
                  <DropdownItem href="/profile">
                    Profile
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