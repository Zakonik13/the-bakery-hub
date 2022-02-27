import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import Closed from "./Closed";
import Opened from "./Opened";

const Hours = () => {
  const closedHours = [
    {
      day: "Sunday",
      hours: "Closed",
    },
    {
      day: "Monday",
      hours: "Closed",
    },
  ];

  const openedHours = [
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
            <ListGroup>
              <ListGroup.Item
                style={{ backgroundColor: "#dfdfdf", color: "black" }}
              >
                <h1 className="hour-title">Opening Hours</h1>
              </ListGroup.Item>
              <Closed workHours={closedHours} />
              <Opened workHours={openedHours} />
            </ListGroup>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Hours;
