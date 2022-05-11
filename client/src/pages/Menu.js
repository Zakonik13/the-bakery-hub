import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { GET_MENU } from "../utils/queries";
// Components
import Page from "../components/Page";

const Menu = () => {
  const { data } = useQuery(GET_MENU);
  const menu = data?.menu || {};
  console.log(menu);

  return (
    <Page>
      <div
        style={{
          marginTop: "120px",
          marginBottom: "25px",
          marginRight: "85px",
          marginLeft: "85px",
          borderRadius: "15px",
          boxShadow: "6px 2px 15px #00000040",
        }}
      >
        <center>
          <h4>MENU</h4>
        </center>
        <center>
          <h4>Cakes</h4>
        </center>
        <Row>
          <Col />
          <Col>
            <label htmlFor="">Dimensions:</label>
            <ul className="noDeco">
              <li>8"</li>
              <li>10"</li>
              <li>1/4 Sheet</li>
              <li>1/2 Sheet</li>
            </ul>
          </Col>
          <Col>
            <label htmlFor="">Starting at:</label>
            <ul className="noDeco">
              <li>${menu.eightInch ? menu.eightInch : "N/A"}</li>
              <li>${menu.tenInch ? menu.tenInch : "N/A"}</li>
              <li>${menu.quarterSheet ? menu.quarterSheet : "N/A"}</li>
              <li>${menu.halfSheet ? menu.halfSheet : "N/A"}</li>
            </ul>
          </Col>
          <Col />
        </Row>
        <center>
          <h4>Pies</h4>
        </center>
        <Row>
          <Col />
          <Col>
            <label htmlFor="">Size:</label>
            <ul className="noDeco">
              <li>Individual</li>
              <li>Standard</li>
            </ul>
          </Col>
          <Col>
            <label htmlFor="">Starting at:</label>
            <ul className="noDeco">
              <li>${menu.individualPie ? menu.individualPie : "N/A"}</li>
              <li>${menu.standardPie ? menu.standardPie : "N/A"}</li>
            </ul>
          </Col>
          <Col />
        </Row>
        <center>
          <h4>Cupcakes</h4>
        </center>
        <Row>
          <Col />
          <Col>
            <label htmlFor="">Amount:</label>
            <ul className="noDeco">
              <li>per Dozen</li>
            </ul>
          </Col>
          <Col>
            <label htmlFor="">Starting at:</label>
            <ul className="noDeco">
              <li>${menu.dozenCupcakes ? menu.dozenCupcakes : "N/A"}</li>
            </ul>
          </Col>
          <Col />
        </Row>
        <center>
          <h4>Cookies</h4>
        </center>
        <Row>
          <Col />
          <Col>
            <label htmlFor="">Amount:</label>
            <ul className="noDeco">
              <li>per Dozen</li>
            </ul>
          </Col>
          <Col>
            <label htmlFor="">Starting at:</label>
            <ul className="noDeco">
              <li>${menu.dozenCookies ? menu.dozenCookies : "N/A"}</li>
            </ul>
          </Col>
          <Col />
        </Row>
      </div>
    </Page>
  );
};

export default Menu;
