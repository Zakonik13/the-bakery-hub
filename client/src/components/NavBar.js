import React from "react";
import Auth from "../utils/auth";
import { Navbar, Container, Nav, Image, Badge } from "react-bootstrap";
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
            textShadow: "0px 0px 8px #b33e3e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          href="/"
        >
          <Image
            src={Logo}
            height="60px"
            style={{ marginLeft: "-20px", paddingRight: "10px" }}
          />

          <p style={{ fontSize: "5.5vmin", marginBottom: "0px" }}>
            The Bakery Hub
          </p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end navbar-nav"
        >
          <Nav style={{ fontSize: "3.2vmin" }}>
            <center>
              <Nav.Link
                href="/"
                style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
              >
                Home
              </Nav.Link>
            </center>

            <center>
              <Nav.Link
                href="/gallery"
                style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
              >
                Gallery
              </Nav.Link>
            </center>

            <center>
              <Nav.Link
                href="/menu"
                style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
              >
                Menu
              </Nav.Link>
            </center>

            <center>
              <Nav.Link
                href="/order-form"
                style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
              >
                Order
              </Nav.Link>
            </center>

            <center>
              <Nav.Link
                href="/cart"
                style={{ color: "#ffffff", textShadow: "0px 0px 8px #b33e3e" }}
              >
                Cart
              </Nav.Link>
            </center>

            {Auth.loggedIn() && (
              <>
                <center>
                  <Nav.Link
                    href="/admin-edit"
                    style={{
                      color: "#ffffff",
                      textShadow: "0px 0px 8px #b33e3e",
                    }}
                  >
                    Edit
                  </Nav.Link>
                </center>

                <center>
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
                </center>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
