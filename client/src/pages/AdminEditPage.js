import React from "react";
import { Container, Col } from "react-bootstrap";
import Auth from "../utils/auth";
// Components
import EditHome from "../components/AdminEdit/EditHome";
import EditCake from "../components/AdminEdit/EditCake";
import EditCupcake from "../components/AdminEdit/EditCupcake";
import EditPie from "../components/AdminEdit/EditPie";
import EditSchedule from "../components/AdminEdit/EditSchedule";
import EditMenu from "../components/AdminEdit/EditMenu";
import Page from "../components/Page";

const AdminEditPage = () => {
  return (
    <Page>
      {Auth.loggedIn() ? (
        <Container className="admin-container">
          <h1>This is the Admin page!</h1>
          <h6>
            Change all of the fields you wish to edit and click save. <br />
            Log out of Admin or click a tab in the Navigation Bar to see your
            new changes!
          </h6>
          <EditHome />
          <EditCake />
          <EditCupcake />
          <EditPie />
          <EditSchedule />
          <EditMenu />
        </Container>
      ) : (
        <Container style={{ height: "300px" }}>
          <Col>
            <center>
              <h3
                style={{
                  borderRadius: "15px",
                  boxShadow: "6px 2px 15px #00000040",
                  marginTop: "205px",
                  padding: "15px",
                }}
              >
                You must be logged in to view this page!
              </h3>
            </center>
          </Col>
        </Container>
      )}
    </Page>
  );
};

export default AdminEditPage;
