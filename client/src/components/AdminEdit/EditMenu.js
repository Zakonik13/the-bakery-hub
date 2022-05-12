import React, { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_MENU } from "../../utils/queries";
import { UPDATE_MENU } from "../../utils/mutations";

const EditMenu = () => {
  const [formState, setFormState] = useState({
    eightInch: 0,
    tenInch: 0,
    quarterSheet: 0,
    halfSheet: 0,
    individualPie: 0,
    standardPie: 0,
    dozenCupcakes: 0,
    dozenCookies: 0,
    other: "",
    otherPrice: "",
  });

  const { data } = useQuery(GET_MENU);
  const [updateMenu] = useMutation(UPDATE_MENU);
  const menu = data?.menu || {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newValue = parseInt(value);

    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    await updateMenu({
      variables: {
        id: menu._id,
        eightInch: formState.eightInch,
        tenInch: formState.tenInch,
        quarterSheet: formState.quarterSheet,
        halfSheet: formState.halfSheet,
        individualPie: formState.individualPie,
        standardPie: formState.standardPie,
        dozenCupcakes: formState.dozenCupcakes,
        dozenCookies: formState.dozenCookies,
      },
      refetchQueries: [{ query: GET_MENU }],
    });

    document.getElementById("Menu").reset();
  };

  return (
    <>
      <Form id="Menu" style={{ marginBottom: "40px" }}>
        {" "}
        <Container
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
            marginTop: "25px",
            padding: "15px 25px 25px 25px",
          }}
        >
          <center>
            <h4>Edit Menu</h4>
          </center>
          <hr />
          <center>
            <h5>Cake</h5>
          </center>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Group style={{ margin: "5px" }}>
              <Form.Label>8"</Form.Label>
              <Form.Text>Current Price: ${menu.eightInch}</Form.Text>
              <div>
                <Form.Control name="eightInch" onChange={handleChange} />
              </div>
            </Form.Group>
            <Form.Group style={{ margin: "5px" }}>
              <Form.Label>10"</Form.Label>
              <Form.Text>Current Price: ${menu.tenInch}</Form.Text>
              <div>
                <Form.Control name="tenInch" onChange={handleChange} />
              </div>
            </Form.Group>
            <Form.Group style={{ margin: "5px" }}>
              <Form.Label>1/4 Sheet</Form.Label>
              <Form.Text>Current Price: ${menu.quarterSheet}</Form.Text>
              <div>
                <Form.Control name="quarterSheet" onChange={handleChange} />
              </div>
            </Form.Group>
            <Form.Group style={{ margin: "5px" }}>
              <Form.Label>1/2 Sheet</Form.Label>
              <Form.Text>Current Price: ${menu.halfSheet}</Form.Text>
              <div>
                <Form.Control name="halfSheet" onChange={handleChange} />
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
                  <Form.Text>Current Price: ${menu.individualPie}</Form.Text>
                  <div>
                    <Form.Control
                      name="individualPie"
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>
                <Form.Group style={{ margin: "5px" }}>
                  <Form.Label>Standard</Form.Label>
                  <Form.Text>Current Price: ${menu.standardPie}</Form.Text>
                  <div>
                    <Form.Control name="standardPie" onChange={handleChange} />
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
                  <Form.Text>Current Price: ${menu.dozenCupcakes}</Form.Text>
                  <div>
                    <Form.Control
                      name="dozenCupcakes"
                      onChange={handleChange}
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
                  <Form.Text>Current Price: ${menu.dozenCookies}</Form.Text>
                  <div>
                    <Form.Control name="dozenCookies" onChange={handleChange} />
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
              onClick={handleUpdate}
            >
              Save
            </Button>
          </center>

          <hr />

          {/* <Form.Group>
            <Form.Label>Add New Flavor</Form.Label>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Control
                value="TBD"
                onChange={(event) => setFormState(event.target.value)}
              />
              <Button style={{ marginLeft: "15px", width: "90px" }}>Add</Button>
            </div>
            <Form.Text>Enter text</Form.Text>
          </Form.Group> */}
        </Container>
      </Form>
    </>
  );
};

export default EditMenu;
