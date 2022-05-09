import React from "react";
import { Row, Col } from "react-bootstrap";
// Components
import Page from "../components/Page";

const Menu = () => {
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
              <li>$20</li>
              <li>$30</li>
              <li>$25</li>
              <li>$35</li>
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
              <li>$5</li>
              <li>$15</li>
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
              <li>$15</li>
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
              <li>$15</li>
            </ul>
          </Col>
          <Col />
        </Row>
      </div>
    </Page>
  );
};

export default Menu;
