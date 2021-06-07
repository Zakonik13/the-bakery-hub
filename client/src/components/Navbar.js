import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {

    return (
        <Navbar variant="dark" fixed="top">
            <Navbar.Brand style={{fontSize: 55}} href="/">The Bakery Hub</Navbar.Brand>
            <Nav className="mr-auto" style={{fontSize: 25}}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;