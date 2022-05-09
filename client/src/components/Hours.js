import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { GET_SCHEDULE } from "../utils/queries";
// Components
import Opened from "./Opened";

const Hours = () => {
  const { data } = useQuery(GET_SCHEDULE);

  const operatingHours = {
    _id: "123456789",
    SundayAM: "loading...",
    SundayPM: "loading...",
    MondayAM: "loading...",
    MondayPM: "loading...",
    TuesdayAM: "loading...",
    TuesdayPM: "loading...",
    WednesdayAM: "loading...",
    WednesdayPM: "loading...",
    ThursdayAM: "loading...",
    ThursdayPM: "loading...",
    FridayAM: "loading...",
    FridayPM: "loading...",
    SaturdayAM: "loading...",
    SaturdayPM: "loading...",
  };

  const schedule = data?.schedule || operatingHours;

  const scheduleArr = Object.entries(schedule);
  const hours = scheduleArr.filter((item, index) => index !== 0);

  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col>
            <h6 className="hour-title">Hours</h6>
            <Opened workHours={hours} />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Hours;
