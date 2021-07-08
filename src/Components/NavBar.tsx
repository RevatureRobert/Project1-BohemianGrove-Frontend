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
<<<<<<< HEAD

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
=======
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
                {/* <NavLink id="redirect-to-account-nav" href="/signin">Account</NavLink> */}
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
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
          </Nav>
        </Navbar>
      </div>
    );
}

export {};
export default NavigationBar;