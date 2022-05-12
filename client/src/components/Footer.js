import React from "react";
import Auth from "../utils/auth";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// Images
import Email from "../images/email.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
// Components
import Hours from "./Hours";

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
    <Container style={{ backgroundColor: "#2b2b2b", paddingTop: "30px" }} fluid>
      <Row>
        <Col xs="8" lg="8">
          <Hours />
        </Col>
        <Col xs="2" lg="4">
          {/* <h6 className="">Phone: (502) 572-7499</h6>
            <h6 className="floatLeft">Email: estherjackson@thebakeryhub.com</h6> */}
          <center>
            <a
              style={{ padding: "10px" }}
              href="estherjackson@thebakeryhub.com"
            >
              <Image
                src={Email}
                height="50px"
                width="50px"
                style={{ marginBottom: "15px" }}
              />
            </a>

            <a
              style={{ padding: "10px" }}
              href="https://www.facebook.com/thebakeryhub.estherjackson/"
            >
              <Image
                src={Facebook}
                height="50px"
                width="50px"
                style={{ marginBottom: "15px" }}
              />
            </a>

            <a
              style={{ padding: "10px" }}
              href="https://l.facebook.com/l.php?u=http%3A%2F%2Finstagram.com%2FESTHERJACKSON950%3Ffbclid%3DIwAR3CTodmBGM0r0iHGLd6E5nAiaHoVlBFQGdCBLV88n2mOOVCKQuY8EwbTJk&h=AT07qBWO365HdAcuDfDw_N9LhrDxzEEpf64StXrSjbMYhIoTcJVJJt8aDI_atHZrjStNyC_dFImfUAK7etZRT_urPxBBbC1tFDQ55CYyHTUmeKA4xtvI3TGTxZE_S_CIJZViSjtyUXgItTgB4Cs"
            >
              <Image
                src={Instagram}
                height="50px"
                width="50px"
                style={{ marginBottom: "15px" }}
              />
            </a>
          </center>
          <br />
          <center>
            <div>
              <Link to={"/admin"} onClick={handleClick}>
                Admin
              </Link>
            </div>
            <div>
              <a href="/merchant-policies">Merchant Policies</a>
            </div>
            <div>
              <a href="/legal-notice">Legal Notice</a>
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
