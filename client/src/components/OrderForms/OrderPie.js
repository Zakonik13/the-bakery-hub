import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { GET_PIE } from "../../utils/queries";

const OrderPie = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Pie",
    flavor: "Select",
    size: "",
    qty: 0,
    text: "",
  });

  const { data } = useQuery(GET_PIE);
  const pie = data?.pie || {};

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
        case "flavor":
          if (val === "Select") {
            test = "fail";
          }
          break;
        case "size":
          if (val === "") {
            test = "fail";
          }
          break;
        case "qty":
          if (val === 0) {
            test = "fail";
          }
          break;
        default:
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

      document.getElementById("pieID").reset();
      setFormState({
        product: "Pie",
        flavor: "Select",
        size: "",
        qty: 0,
        text: "",
      });
    }
  };

  return (
    <div>
      <form id="pieID">
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
                  height: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="4" lg="4">
                  <h6>Select a size:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Standard"
                        name="size"
                        value="Standard"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Individual"
                        name="size"
                        value="Individual"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </Col>
              </Row>

              <Row
                style={{
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="4" lg="4">
                  <h6>Select a flavor:</h6>
                </Col>
                <Col xs="8" lg="6">
                  {formState.size === "Standard" ? (
                    <Form.Select
                      aria-label="Default select example"
                      name="flavor"
                      onChange={handleChange}
                    >
                      <option value="select">-- Select --</option>
                      {pie.flavors ? (
                        pie.flavors.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))
                      ) : (
                        <option>Loading...</option>
                      )}
                    </Form.Select>
                  ) : (
                    <Form.Select
                      aria-label="Default select example"
                      name="flavor"
                      onChange={handleChange}
                    >
                      <option value="select">-- Select --</option>
                      {pie.flavors ? (
                        pie.flavors.map((item, index) => (
                          <option value={item} key={index}>
                            {item}
                          </option>
                        ))
                      ) : (
                        <option>Loading...</option>
                      )}
                    </Form.Select>
                  )}
                </Col>
              </Row>
              <Row
                style={{
                  height: "40px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="4" lg="4">
                  <h6>Qty:</h6>
                </Col>
                <Col xs="3" lg="2">
                  <Form.Select
                    aria-label="Default select example"
                    name="qty"
                    onChange={handleChange}
                  >
                    <option style={{ display: "none" }}>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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

export default OrderPie;
