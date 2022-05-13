import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { UPDATE_SCHEDULE } from "../../utils/mutations";
import { GET_SCHEDULE } from "../../utils/queries";

const EditSchedule = () => {
  const [updateSchedule] = useMutation(UPDATE_SCHEDULE);
  const { data } = useQuery(GET_SCHEDULE);
  const [day, setDay] = useState({
    SundayAM: "",
    SundayPM: "",
    MondayAM: "",
    MondayPM: "",
    TuesdayAM: "",
    TuesdayPM: "",
    WednesdayAM: "",
    WednesdayPM: "",
    ThursdayAM: "",
    ThursdayPM: "",
    FridayAM: "",
    FridayPM: "",
    SaturdayAM: "",
    SaturdayPM: "",
  });

  const schedule = data?.schedule || {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDay({
      ...day,
      [name]: value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    await updateSchedule({
      variables: {
        id: schedule._id,
        sundayAM: day.SundayAM,
        sundayPM: day.SundayPM,
        mondayAM: day.MondayAM,
        mondayPM: day.MondayPM,
        tuesdayAM: day.TuesdayAM,
        tuesdayPM: day.TuesdayPM,
        wednesdayAM: day.WednesdayAM,
        wednesdayPM: day.WednesdayPM,
        thursdayAM: day.ThursdayAM,
        thursdayPM: day.ThursdayPM,
        fridayAM: day.FridayAM,
        fridayPM: day.FridayPM,
        saturdayAM: day.SaturdayAM,
        saturdayPM: day.SaturdayPM,
      },
    });
  };

  return (
    <Form id="ID">
      <Container
        style={{
          borderRadius: "15px",
          boxShadow: "6px 2px 15px #00000040",
          marginTop: "25px",
          padding: "15px 25px 25px 25px",
        }}
      >
        <center>
          <h4>Edit Hours</h4>
        </center>
        <center>
          <h6>
            Use 00:00 or 0:00 for time format. For days that you are closed use
            000 in both fields for that day.
          </h6>
        </center>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Sunday</Form.Label>
            </Col>
            <Col
              xs="auto"
              lg="3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input name="SundayAM" type="text" onChange={handleChange} />-
              <input name="SundayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Monday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="MondayAM" type="text" onChange={handleChange} />-
              <input name="MondayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Tuesday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="TuesdayAM" type="text" onChange={handleChange} />-
              <input name="TuesdayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Wednesday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="WednesdayAM" type="text" onChange={handleChange} />-
              <input name="WednesdayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Thursday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="ThursdayAM" type="text" onChange={handleChange} />-
              <input name="ThursdayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Friday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="FridayAM" type="text" onChange={handleChange} />-
              <input name="FridayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs="3" lg="3" />
            <Col xs="3" lg="2">
              <Form.Label>Saturday</Form.Label>
            </Col>
            <Col lg="3" style={{ display: "flex", justifyContent: "center" }}>
              <input name="SaturdayAM" type="text" onChange={handleChange} />-
              <input name="SaturdayPM" type="text" onChange={handleChange} />
            </Col>
            <Col />
          </Row>
        </Form.Group>

        <center>
          <Button
            type="submit"
            onClick={handleSave}
            style={{ marginTop: "15px" }}
          >
            Save All
          </Button>
        </center>
      </Container>
    </Form>
  );
};

export default EditSchedule;
