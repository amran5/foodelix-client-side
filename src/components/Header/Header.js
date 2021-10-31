import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="text-black">Foodelix</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-cmn" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-cmn" as={HashLink} to="/home#service">Service</Nav.Link>
                        {user?.email && <Nav.Link className="text-cmn" as={Link} to="/manageServices">Manage Service</Nav.Link>}
                        {user?.email && <Nav.Link className="text-cmn" as={Link} to="/addService">Add A New Service</Nav.Link>}
                        {!user?.email && <Nav.Link className="text-cmn" as={Link} to="/logIn">Sign In</Nav.Link>}
                        {!user?.email && <Nav.Link className="text-cmn" as={Link} to="/signUp">Sign Up</Nav.Link>}
                        {user?.email && <Nav.Link className="text-cmn" as={Link} to="/signUp"><button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px", marginRight: "5px" }} onClick={logOut}>Log Out</button></Nav.Link>}
                        <Navbar.Text className="text-cmn">
                            {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;