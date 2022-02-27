import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./footer.css";

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
          <Link to={"/admin"} onClick={handleClick}>
            Admin
          </Link>
        </Col>
        <Col />
        <Col>
          <div className="move-right">&copy;2022 by Zakonik247 </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
