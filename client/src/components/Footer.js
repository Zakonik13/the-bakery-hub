import React from "react";
import Auth from "../utils/auth";
import { Row, Col } from "react-bootstrap";
// Components
import Contact from "./Contact";

const Footer = () => {
  const handleClick = (event) => {
    event.preventDefault();
    if (Auth.loggedIn() === true) {
      alert("You are already logged in");
    } else {
      window.location.assign("/admin");
    }
  };

  return (
    <footer className="footer">
      <Row className="footer-spacer">
        <Col>
          <Contact handleClick={handleClick} />
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
