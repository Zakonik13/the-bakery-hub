import React from "react";
import Auth from "../utils/auth";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
// Components
import Logo from "../images/logo-nobg-500.png";

const Navigation = () => {
  const handleLogOut = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand
          style={{
            color: "#fff",
            fontSize: 40,
            textShadow: "0px 0px 8px #b33e3e",
          }}
          href="/"
        >
          <Image src={Logo} height="60px" style={{ paddingRight: "10px" }} />
          The Bakery Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end navbar-nav"
        >
          <Nav style={{ fontSize: 25 }}>
            <Nav.Link
              href="/"
              style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/gallery"
              style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              href="/menu"
              style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              href="/order-form"
              style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
            >
              Order
            </Nav.Link>
            <Nav.Link
              href="/cart"
              style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
            >
              Cart
            </Nav.Link>
            {Auth.loggedIn() && (
              <>
                <Nav.Link
                  href="/admin-edit"
                  style={{
                    color: "#ffffff",
                    textShadow: "0px 0px 8px #b33e3e",
                  }}
                >
                  Edit
                </Nav.Link>
                <Nav.Link
                  href="/"
                  style={{
                    color: "#ffffff",
                    textShadow: "0px 0px 8px #b33e3e",
                  }}
                  onClick={handleLogOut}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
