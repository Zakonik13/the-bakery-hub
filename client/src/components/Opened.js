import React from "react";
import { ListGroup } from "react-bootstrap";

const Opened = ({ workHours }) => {
  return (
    <>
      {workHours.map((hour) => (
        <div key={hour.day}>
          <div className="flex">
            <p className="day-spacer hour-title">{hour.day}</p>
            <p className="hour-spacer hour-title">{hour.hours}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Opened;
