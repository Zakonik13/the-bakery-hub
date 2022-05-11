import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import {
  ADD_USER,
  ADD_HOMEPAGE,
  ADD_CAKE,
  ADD_COOKIE,
  ADD_CUPCAKE,
  ADD_PIE,
  ADD_SCHEDULE,
  ADD_MENU,
} from "../utils/mutations";
// Components
import Page from "../components/Page";

const AdminAdd = () => {
  const [addHomePage] = useMutation(ADD_HOMEPAGE);
  const [addCake] = useMutation(ADD_CAKE);
  const [addCookie] = useMutation(ADD_COOKIE);
  const [addCupcake] = useMutation(ADD_CUPCAKE);
  const [addPie] = useMutation(ADD_PIE);
  const [addSchedule] = useMutation(ADD_SCHEDULE);
  const [addMenu] = useMutation(ADD_MENU);

  const [homePage, setHomePage] = useState({
    hero_image: "",
    home_paragraph1: "",
    home_paragraph2: "",
    home_paragraph3: "",
  });

  const [cake, setCake] = useState({ links: "", themes: "", flavors: "" });
  const [cookie, setCookie] = useState({ links: "", flavors: "" });
  const [cupcake, setCupcake] = useState({
    links: "",
    themes: "",
    flavors: "",
  });
  const [pie, setPie] = useState({ links: "", flavors: "" });
  const [schedule, setSchedule] = useState({
    sundayAM: "",
    sundayPM: "",
    mondayAM: "",
    mondayPM: "",
    tuesdayAM: "",
    tuesdayPM: "",
    wednesdayAM: "",
    wednesdayPM: "",
    thursdayAM: "",
    thursdayPM: "",
    fridayAM: "",
    fridayPM: "",
    saturdayAM: "",
    saturdayPM: "",
  });
  const [menu, setMenu] = useState({
    eightInch: "",
    tenInch: "",
    quarterSheet: "",
    halfSheet: "",
    individualPie: "",
    standardPie: "",
    dozenCupcakes: "",
    dozenCookies: "",
    other: "",
    otherPrice: "",
  });

  console.log(homePage);
  const handleHomePageChange = (event) => {
    const { name, value } = event.target;

    setHomePage({
      ...homePage,
      [name]: value,
    });
  };

  const handleHomePage = async () => {
    addHomePage({
      variables: {
        hero_image: homePage.hero_image,
        home_paragraph1: homePage.home_paragraph1,
        home_paragraph2: homePage.home_paragraph2,
        home_paragraph3: homePage.home_paragraph3,
      },
    });
  };

  const handleCakeChange = (event) => {
    const { name, value } = event.target;

    setCake({
      ...cake,
      [name]: value,
    });
  };
  console.log(cake);
  const handleCake = async () => {
    await addCake({
      variables: {
        links: cake.links,
        themes: cake.themes,
        flavors: cake.flavors,
      },
    });
  };

  const handleCookieChange = (event) => {
    const { name, value } = event.target;

    setCookie({
      ...cookie,
      [name]: value,
    });
  };
  const handleCookie = async () => {
    addCookie({
      variables: { links: cookie.links, flavors: cookie.flavors },
    });
  };

  const handleCupcakeChange = (event) => {
    const { name, value } = event.target;

    setCupcake({
      ...cupcake,
      [name]: value,
    });
  };
  const handleCupcake = async () => {
    addCupcake({
      variables: {
        links: cupcake.links,
        themes: cupcake.themes,
        flavors: cupcake.flavors,
      },
    });
  };

  const handlePieChange = (event) => {
    const { name, value } = event.target;

    setPie({
      ...pie,
      [name]: value,
    });
  };
  const handlePie = async () => {
    addPie({
      variables: { links: pie.links, flavors: pie.flavors },
    });
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;

    setSchedule({
      ...schedule,
      [name]: value,
    });
  };
  console.log(schedule);
  const handleSchedule = async () => {
    addSchedule({
      variables: {
        sundayAM: schedule.sundayAM,
        sundayPM: schedule.sundayPM,
        mondayAM: schedule.mondayAM,
        mondayPM: schedule.mondayPM,
        tuesdayAM: schedule.tuesdayAM,
        tuesdayPM: schedule.tuesdayPM,
        wednesdayAM: schedule.wednesdayAM,
        wednesdayPM: schedule.wednesdayPM,
        thursdayAM: schedule.thursdayAM,
        thursdayPM: schedule.thursdayPM,
        fridayAM: schedule.fridayAM,
        fridayPM: schedule.fridayPM,
        saturdayAM: schedule.saturdayAM,
        saturdayPM: schedule.saturdayPM,
      },
    });
  };

  const handleMenuChange = (event) => {
    const { name, value } = event.target;

    const newValue = parseInt(value);

    setMenu({
      ...menu,
      [name]: newValue,
    });
  };
  console.log(menu);
  const handleMenu = async () => {
    addMenu({
      variables: {
        eightInch: menu.eightInch,
        tenInch: menu.tenInch,
        quarterSheet: menu.quarterSheet,
        halfSheet: menu.halfSheet,
        individualPie: menu.individualPie,
        standardPie: menu.standardPie,
        dozenCupcakes: menu.dozenCupcakes,
        dozenCookies: menu.dozenCookies,
        other: menu.other,
        otherPrice: menu.otherPrice,
      },
    });
  };

  return (
    <Page>
      <Container
        style={{
          borderRadius: "15px",
          boxShadow: "6px 2px 15px #00000040",
          marginTop: "125px",
          padding: "15px 25px 25px 25px",
        }}
      >
        <center>
          <h4>Add Home Page</h4>
        </center>
        <Form.Group>
          <Form className="label">Add Home Page Image</Form>
          <Form.Control
            name="hero_image"
            onChange={handleHomePageChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Home Paragraph 1</Form>
          <Form.Control
            name="home_paragraph1"
            onChange={handleHomePageChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Home Paragraph 2</Form>
          <Form.Control
            name="home_paragraph2"
            onChange={handleHomePageChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Home Paragraph 3</Form>
          <Form.Control
            name="home_paragraph3"
            onChange={handleHomePageChange}
          ></Form.Control>
        </Form.Group>
        <center>
          <Button
            type="submit"
            onClick={handleHomePage}
            style={{ marginTop: "15px" }}
          >
            Save
          </Button>
        </center>
        <hr />
        <br />
        <center>
          <h4>Add Cake</h4>
        </center>
        <Form.Group>
          <Form className="label">Add Cake Link</Form>
          <Form.Control name="links" onChange={handleCakeChange}></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Cake Theme</Form>
          <Form.Control
            name="themes"
            onChange={handleCakeChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Cake Flavor</Form>
          <Form.Control
            name="flavors"
            onChange={handleCakeChange}
          ></Form.Control>
        </Form.Group>
        <center>
          <Button
            type="submit"
            onClick={handleCake}
            style={{ marginTop: "15px" }}
          >
            Save
          </Button>
        </center>
        <hr />
        <br />
        <center>
          <h4>Add Cupcake</h4>
        </center>
        <Form.Group>
          <Form className="label">Add Cupcake Link</Form>
          <Form.Control
            name="links"
            onChange={handleCupcakeChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Cupcake Theme</Form>
          <Form.Control
            name="themes"
            onChange={handleCupcakeChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Add Cupcake Flavor</Form>
          <Form.Control
            name="flavors"
            onChange={handleCupcakeChange}
          ></Form.Control>
        </Form.Group>
        <center>
          <Button
            type="submit"
            onClick={handleCupcake}
            style={{ marginTop: "15px" }}
          >
            Save
          </Button>
        </center>
        <hr />
        <br />
        <center>
          <h4>Add Cookie</h4>
        </center>
        <Form.Group>
          <Form className="label">Add Cookie Link</Form>
          <Form.Control
            name="links"
            onChange={handleCookieChange}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Cookie Flavor</Form>
          <Form.Control
            name="flavors"
            onChange={handleCookieChange}
          ></Form.Control>
        </Form.Group>
        <center>
          <Button
            type="submit"
            onClick={handleCookie}
            style={{ marginTop: "15px" }}
          >
            Save
          </Button>
        </center>
        <hr />
        <center>
          <h4>Add Pie</h4>
        </center>
        <Form.Group>
          <Form className="label">Add Pie Link</Form>
          <Form.Control name="links" onChange={handlePieChange}></Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form className="label">Add Pie Flavor</Form>
          <Form.Control
            name="flavors"
            onChange={handlePieChange}
          ></Form.Control>
        </Form.Group>
        <center>
          <Button
            type="submit"
            onClick={handlePie}
            style={{ marginTop: "15px" }}
          >
            Save
          </Button>
        </center>
        <hr />
        <br />
        <div>
          <center>
            <h4>Add Operating Hours</h4>
          </center>
          <center>
            <h6>
              Use 00:00 or 0:00 for time format. For days that you are closed
              use 000 in both fields for that day.
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
                <input
                  name="sundayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="sundayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="mondayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="mondayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="tuesdayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="tuesdayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="wednesdayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="wednesdayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="thursdayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="thursdayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="fridayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="fridayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
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
                <input
                  name="saturdayAM"
                  type="text"
                  onChange={handleTimeChange}
                />
                -
                <input
                  name="saturdayPM"
                  type="text"
                  onChange={handleTimeChange}
                />
              </Col>
              <Col />
            </Row>
          </Form.Group>

          <center>
            <Button
              type="submit"
              onClick={handleSchedule}
              style={{ marginTop: "15px" }}
            >
              Save All
            </Button>
          </center>
        </div>
        <hr />

        <center>
          <h4>Add Menu</h4>
        </center>
        <hr />
        <center>
          <h5>Cake</h5>
        </center>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form.Group style={{ margin: "5px" }}>
            <Form.Label>8"</Form.Label>

            <div>
              <Form.Control name="eightInch" onChange={handleMenuChange} />
            </div>
          </Form.Group>
          <Form.Group style={{ margin: "5px" }}>
            <Form.Label>10"</Form.Label>

            <div>
              <Form.Control name="tenInch" onChange={handleMenuChange} />
            </div>
          </Form.Group>
          <Form.Group style={{ margin: "5px" }}>
            <Form.Label>1/4 Sheet</Form.Label>

            <div>
              <Form.Control name="quarterSheet" onChange={handleMenuChange} />
            </div>
          </Form.Group>
          <Form.Group style={{ margin: "5px" }}>
            <Form.Label>1/2 Sheet</Form.Label>

            <div>
              <Form.Control name="halfSheet" onChange={handleMenuChange} />
            </div>
          </Form.Group>
        </div>

        <hr />
        <Row>
          <Col lg="6">
            <center>
              <h5>Pie</h5>
            </center>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Group style={{ margin: "5px" }}>
                <Form.Label>Individual</Form.Label>

                <div>
                  <Form.Control
                    name="individualPie"
                    onChange={handleMenuChange}
                  />
                </div>
              </Form.Group>
              <Form.Group style={{ margin: "5px" }}>
                <Form.Label>Standard</Form.Label>

                <div>
                  <Form.Control
                    name="standardPie"
                    onChange={handleMenuChange}
                  />
                </div>
              </Form.Group>
            </div>
          </Col>
          <Col>
            <center>
              <h5>Cupcakes</h5>
            </center>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Group style={{ margin: "5px" }}>
                <Form.Label>per Dozen</Form.Label>

                <div>
                  <Form.Control
                    name="dozenCupcakes"
                    onChange={handleMenuChange}
                  />
                </div>
              </Form.Group>
            </div>
          </Col>
          <Col>
            <center>
              <h5>Cookies</h5>
            </center>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Group style={{ margin: "5px" }}>
                <Form.Label>per Dozen</Form.Label>

                <div>
                  <Form.Control
                    name="dozenCookies"
                    onChange={handleMenuChange}
                  />
                </div>
              </Form.Group>
            </div>
          </Col>
        </Row>

        <center>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              width: "70px",
            }}
            onClick={handleMenu}
          >
            Save
          </Button>
        </center>
      </Container>
    </Page>
  );
};

export default AdminAdd;
