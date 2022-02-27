import React from "react";
import { ListGroup } from "react-bootstrap";

const Opened = ({ workHours }) => {
  const styling = { backgroundColor: "#8BC34A" };
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
              style={{ backgroundColor: "#ade968c9" }}
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

export default Opened;
