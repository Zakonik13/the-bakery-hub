import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// Images
import Email from "../images/email.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
// Components
import Hours from "./Hours";

const Contact = ({ handleClick }) => {
  return (
    <>
      <Container className="flex-center">
        <div>
          {/* <h6 className="">Phone: (502) 572-7499</h6>
            <h6 className="floatLeft">Email: estherjackson@thebakeryhub.com</h6> */}
          <div className="icon-padding">
            <a href="estherjackson@thebakeryhub.com">
              <Image src={Email} height="50px" width="50px" />
            </a>
          </div>
          <div className="icon-padding">
            <a href="https://www.facebook.com/thebakeryhub.estherjackson/">
              <Image src={Facebook} height="50px" width="50px" />
            </a>
          </div>
          <div className="icon-padding">
            <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Finstagram.com%2FESTHERJACKSON950%3Ffbclid%3DIwAR3CTodmBGM0r0iHGLd6E5nAiaHoVlBFQGdCBLV88n2mOOVCKQuY8EwbTJk&h=AT07qBWO365HdAcuDfDw_N9LhrDxzEEpf64StXrSjbMYhIoTcJVJJt8aDI_atHZrjStNyC_dFImfUAK7etZRT_urPxBBbC1tFDQ55CYyHTUmeKA4xtvI3TGTxZE_S_CIJZViSjtyUXgItTgB4Cs">
              <Image src={Instagram} height="50px" width="50px" />
            </a>
          </div>
        </div>
        <div>
          <Hours />
        </div>
        <div>
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
        </div>
      </Container>
    </>
  );
};

export default Contact;
