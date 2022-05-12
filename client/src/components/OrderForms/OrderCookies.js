import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/react-hooks";
import { GET_COOKIE } from "../../utils/queries";

const OrderCookies = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Cookies",
    flavor: "Select",
    qty: 1,
    text: "",
  });

  const { data } = useQuery(GET_COOKIE);
  const cookie = data?.cookie || {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    let test = "pass";

    for (const [key, val] of Object.entries(formState)) {
      switch (key) {
        case "product":
          break;
        case "flavor":
          if (val === "Select") {
            test = "fail";
          }
          break;
        case "text":
          break;
      }
    }

    if (test === "fail") {
      alert("Please fill out all sections of the form.");
      return;
    } else {
      dispatch({
        type: UPDATE_CART,
        cart: formState,
      });

      document.getElementById("cookieID").reset();
      setFormState({
        product: "Cookies",
        flavor: "Select",
        qty: 0,
        text: "",
      });
    }
  };

  return (
    <div>
      <form id="cookieID">
        <div
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
          }}
        >
          <Row>
            <Col xs="1" lg="3" />
            <Col xs="10" lg="6">
              <Row
                style={{
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="5" lg="4">
                  <h6>Select a flavor:</h6>
                </Col>
                <Col xs="6" lg="6">
                  <Form.Select
                    aria-label="Default select example"
                    name="flavor"
                    onChange={handleChange}
                    required
                  >
                    <option value="select">-- Select --</option>
                    {cookie.flavors ? (
                      cookie.flavors.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))
                    ) : (
                      <option>Loading...</option>
                    )}
                  </Form.Select>
                </Col>
              </Row>
              <Row
                style={{
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="5" lg="4">
                  <h6>Quantity:</h6>
                </Col>
                <Col xs="3" lg="3">
                  <Form.Select
                    aria-label="Default select example"
                    name="qty"
                    onChange={handleChange}
                  >
                    <option value="1">1 dz</option>
                    <option value="2">2 dz</option>
                    <option value="3">3 dz</option>
                    <option value="4">4 dz</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col lg="4">
                  <h6>Special Request:</h6>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                      as="textarea"
                      name="text"
                      placeholder="Detailed instructions"
                      style={{ height: "100px" }}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
            <Col lg="3" />
          </Row>
          <Row
            style={{
              height: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <center>
              <Button
                style={{ backgroundColor: "#b33e3e", border: "none" }}
                type="submit"
                onClick={handleForm}
              >
                Add to Cart
              </Button>
            </center>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default OrderCookies;
