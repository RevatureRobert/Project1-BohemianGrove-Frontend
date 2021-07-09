import { FormEvent, useEffect, useState } from 'react';
import { IAppState } from '../Redux/Store';
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
    Form,
    Input
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const NavigationBar: React.FC = (props: any) => {
    const user = useSelector((store: IAppState) => store.user);

    const [searchTerm, setSearch] = useState('');
    const [redirect, setRedirect] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    function onSubmit(event: FormEvent) {
        event.preventDefault();
        setRedirect("/search/" + searchTerm);
    }

    useEffect(() => {setRedirect('')}, [redirect]);

    if (redirect) return <Redirect to={redirect}/>;

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand id="logo-text" tag={Link} to={user ? "/feed" : "/"}>
                    <img src="/illuminati.ico" className="navLogo" alt=""/>
                    Bohemian Grove
                </NavbarBrand>
                {user && 
                    <Form className="searchBar-container" onSubmit={(e) => onSubmit(e)}>
                        <Input className="searchBar"type="search" placeholder="Search for a user" onChange={(e) => setSearch(e.target.value)}/>
                    </Form>
                }
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="container-fluid" navbar>
                        <NavItem className="ml-auto">
                        </NavItem>
                    </Nav>
                </Collapse>
                <Nav className="ml-auto" navbar>
                    {!user &&
                        <NavItem>
                            <NavLink tag={Link} to="signup">Sign Up</NavLink>
                        </NavItem>
                    }
                    {!user &&
                        <NavItem>
                            <NavLink tag={Link} to="/signin">Sign In</NavLink>
                        </NavItem>
                    }
                    {user && 
                        <NavItem>
                            <NavLink tag={Link} to="/settings">Settings</NavLink>
                        </NavItem>
                    }
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavigationBar;