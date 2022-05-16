import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { GET_EXTRAS } from "../../utils/queries";

const OrderExtras = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    category: "Extras",
    product: "",
    theme: "",
    flavor: "",
    qty: 0,
    text: "",
  });

  const { data } = useQuery(GET_EXTRAS);
  const extras = data?.extras || [];

  function capLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();

    dispatch({
      type: UPDATE_CART,
      cart: formState,
    });

    document.getElementById("extrasID").reset();
    setFormState({
      category: "Extras",
      product: "",
      theme: "",
      qty: 0,
      flavor: "",
      text: "",
    });
  };

  return (
    <>
      <form id="extrasID">
        <div
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
          }}
        >
          <Row>
            <Col xs="1" lg="3" />
            <Col xs="10" lg="6">
              <div>
                <Row
                  style={{
                    height: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Col xs="3" lg="3">
                    <h6>Product:</h6>
                  </Col>
                  <Col xs="8" lg="auto">
                    <Form.Select
                      aria-label="Default select example"
                      name="product"
                      onChange={handleChange}
                      style={{
                        border: "none",
                        boxShadow: "2px 2px 8px #00000040",
                      }}
                    >
                      {/* Set up map for products */}
                      {extras.map((product, index) => (
                        <option key={index} value={product.product}>
                          {capLetter(product.flavor) + " " + product.product}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Row
                  style={{
                    height: "40px",
                    marginTop: "30px",
                  }}
                >
                  <Col xs="3" lg="3">
                    <h6>Qty:</h6>
                  </Col>
                  <Col xs="8" lg="auto">
                    <Form.Select
                      aria-label="Default select example"
                      name={"qty"}
                      onChange={handleChange}
                      style={{
                        border: "none",
                        boxShadow: "2px 2px 8px #00000040",
                      }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </Form.Select>
                  </Col>
                </Row>
              </div>

              <Row
                style={{
                  height: "80px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <Col lg="3">
                  <h6>Special Request:</h6>
                </Col>
                <Col>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                      as="textarea"
                      name="text"
                      placeholder="Detailed instructions"
                      style={{
                        height: "100px",
                        border: "none",
                        boxShadow: "2px 2px 8px #00000040",
                      }}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
            <Col xs="1" lg="3" />
          </Row>
          <Row
            style={{
              height: "40px",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            <center>
              <Button
                style={{ backgroundColor: "#dc5252", border: "none" }}
                type="submit"
                onClick={handleForm}
              >
                Add to Cart
              </Button>
            </center>
          </Row>
        </div>
      </form>
    </>
  );
};

export default OrderExtras;
