import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { GET_MENU } from "../utils/queries";
// Components
import Page from "../components/Page";

const Menu = () => {
  const { data } = useQuery(GET_MENU);
  const menu = data?.menu || {};

  return (
    <Page background={{ backgroundColor: "#ffe7e750" }}>
      <Row style={{ marginTop: "120px" }}>
        <Col xs="1" lg="2" />
        <Col xs="10" lg="8">
          <div
            style={{
              borderRadius: "15px",
              boxShadow: "6px 2px 15px #00000040",
            }}
          >
            <center>
              <h4
                style={{
                  fontWeight: "bold",
                  borderRadius: "15px 15px 0 0 ",
                  borderBottom: "black thin solid",
                  paddingBottom: "15px",

                  backgroundColor: "#e97e7e80",
                }}
              >
                MENU
              </h4>
            </center>
            <center>
              <h4>Cakes</h4>
            </center>
            <Row>
              <Col xs="1" lg="4" />
              <Col xs="6" lg="3">
                <label htmlFor="">Dimensions:</label>
                <ul className="noDeco">
                  <li>8"</li>
                  <li>10"</li>
                  <li>1/4 Sheet</li>
                  <li>1/2 Sheet</li>
                </ul>
              </Col>
              <Col xs="4" lg="3">
                <label htmlFor="">Starting at:</label>
                <ul className="noDeco">
                  <li>${menu.eightInch ? menu.eightInch : "N/A"}</li>
                  <li>${menu.tenInch ? menu.tenInch : "N/A"}</li>
                  <li>${menu.quarterSheet ? menu.quarterSheet : "N/A"}</li>
                  <li>${menu.halfSheet ? menu.halfSheet : "N/A"}</li>
                </ul>
              </Col>
              <Col xs="1" lg="3" />
            </Row>
            <hr />
            <center>
              <h4>Pies</h4>
            </center>
            <Row>
              <Col xs="1" lg="4" />
              <Col xs="6" lg="3">
                <label htmlFor="">Size:</label>
                <ul className="noDeco">
                  <li>Individual</li>
                  <li>Standard</li>
                </ul>
              </Col>
              <Col xs="4" lg="3">
                <label htmlFor="">Starting at:</label>
                <ul className="noDeco">
                  <li>${menu.individualPie ? menu.individualPie : "N/A"}</li>
                  <li>${menu.standardPie ? menu.standardPie : "N/A"}</li>
                </ul>
              </Col>
              <Col xs="1" lg="3" />
            </Row>
            <hr />
            <center>
              <h4>Cupcakes</h4>
            </center>
            <Row>
              <Col xs="1" lg="4" />
              <Col xs="6" lg="3">
                <label htmlFor="">Amount:</label>
                <ul className="noDeco">
                  <li>per Dozen</li>
                </ul>
              </Col>
              <Col xs="4" lg="3">
                <label htmlFor="">Starting at:</label>
                <ul className="noDeco">
                  <li>${menu.dozenCupcakes ? menu.dozenCupcakes : "N/A"}</li>
                </ul>
              </Col>
              <Col xs="1" lg="3" />
            </Row>
            <hr />
            <center>
              <h4>Cookies</h4>
            </center>
            <Row>
              <Col xs="1" lg="4" />
              <Col xs="6" lg="3">
                <label htmlFor="">Amount:</label>
                <ul className="noDeco">
                  <li>per Dozen</li>
                </ul>
              </Col>
              <Col xs="4" lg="3">
                <label htmlFor="">Starting at:</label>
                <ul className="noDeco">
                  <li>${menu.dozenCookies ? menu.dozenCookies : "N/A"}</li>
                </ul>
              </Col>
              <Col xs="1" lg="3" />
            </Row>
          </div>
        </Col>
        <Col xs="1" lg="2" />
      </Row>
    </Page>
  );
};

export default Menu;
