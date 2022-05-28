import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_SCHEDULE } from "../utils/queries";
// Components
import Opened from "./Opened";

const Hours = () => {
  const { data } = useQuery(GET_SCHEDULE);

  const operatingHours = {
    _id: "123456789",
    SundayAM: "000",
    SundayPM: "000",
    MondayAM: "000",
    MondayPM: "000",
    TuesdayAM: "8:00",
    TuesdayPM: "8:00",
    WednesdayAM: "8:00",
    WednesdayPM: "8:00",
    ThursdayAM: "8:00",
    ThursdayPM: "8:00",
    FridayAM: "8:00",
    FridayPM: "8:00",
    SaturdayAM: "8:00",
    SaturdayPM: "8:00",
  };

  const schedule = data?.schedule || operatingHours;

  const scheduleArr = Object.entries(schedule);
  const hours = scheduleArr.filter(
    (item, index) => item[0] !== "_id" && item[0] !== "__typename"
  );

  console.log(hours);

  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col>
            <h4 className="hour-title">Hours</h4>
            <hr style={{ color: "white" }} />
            <Opened workHours={hours} />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Hours;
