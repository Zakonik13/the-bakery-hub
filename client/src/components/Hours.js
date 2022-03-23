import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import Opened from "./Opened";

const Hours = () => {
  const operatingHours = [
    {
      day: "Sunday",
      hours: "Closed",
    },
    {
      day: "Monday",
      hours: "Closed",
    },
    {
      day: "Tuesday",
      hours: "9:00AM - 6:00PM",
    },
    {
      day: "Wednesday",
      hours: "9:00AM - 6:00PM",
    },
    {
      day: "Thursday",
      hours: "9:00AM - 6:00PM",
    },
    {
      day: "Friday",
      hours: "9:00AM - 6:00PM",
    },
    {
      day: "Saturday",
      hours: "9:00AM - 6:00PM",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col>
            <h6 className="hour-title">Hours</h6>
            <Opened workHours={operatingHours} />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Hours;
