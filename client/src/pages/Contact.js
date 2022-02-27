import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hours from "../components/Hours/Hours";

const Contact = () => {
  return (
    <div className="spacer">
      <Container style={{ minHeight: "50vw" }}>
        <Row>
          <Col lg="6">
            <h1 className="hour-title">Contact Info</h1>
            <br />
            <h4>Phone: (502) 572-7499</h4>
            <h4>Email: estherjackson@thebakeryhub.com</h4>
            <h4>Facebook: www.facebook.com/thebakeryhub.estherjackson/</h4>
          </Col>
          <Col>
            <Hours />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
