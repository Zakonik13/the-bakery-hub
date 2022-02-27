import React from "react";
import { ListGroup } from "react-bootstrap";

const Closed = ({ workHours }) => {
  const styling = { backgroundColor: "#D50000", color: "white" };
  return (
    <>
      {workHours.map((hour) => (
        <ListGroup.Item key={hour.day} style={{ backgroundColor: "#dfdfdf" }}>
          <ListGroup horizontal>
            <ListGroup.Item className="day-spacer" style={styling}>
              {hour.day}
            </ListGroup.Item>
            <ListGroup.Item
              className="middle-spacer"
              style={{ backgroundColor: "#d17070dc" }}
            />
            <ListGroup.Item className="hour-spacer" style={styling}>
              {hour.hours}
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      ))}
    </>
  );
};

export default Closed;
