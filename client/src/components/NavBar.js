import React from "react";
import Auth from "../utils/auth";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  const handleLogOut = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{ fontSize: 40 }} href="/">
          The Bakery Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end navbar-nav"
        >
          <Nav style={{ fontSize: 25 }}>
            <Nav.Link href="/" style={{ color: "#ffffff" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/menu" style={{ color: "#ffffff" }}>
              Menu
            </Nav.Link>
            <Nav.Link href="/cart" style={{ color: "#ffffff" }}>
              Cart
            </Nav.Link>
            {Auth.loggedIn() && (
              <Nav.Link
                href="/"
                style={{ color: "#ffffff" }}
                onClick={handleLogOut}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
