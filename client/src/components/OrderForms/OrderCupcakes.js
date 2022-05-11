import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/react-hooks";
import { GET_CUPCAKE } from "../../utils/queries";

const OrderCupcakes = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Cupcakes",
    theme: "Birthday",
    qty: 1,
    icing: "",
    flavor: "Select",
    text: "",
  });

  const { data } = useQuery(GET_CUPCAKE);
  const cupcake = data?.cupcake || {};

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
        case "theme":
          if (val === "") {
            test = "fail";
          }
        case "flavor":
          if (val === "Select") {
            test = "fail";
          }
          break;
        case "icing":
          if (val === "") {
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

      document.getElementById("cakeID").reset();
      setFormState({
        product: "Cupcakes",
        theme: "Birthday",
        qty: 1,
        icing: "",
        flavor: "Select",
        text: "",
      });
    }
  };

  return (
    <>
      <form id="cakeID">
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
                <Col xs="3" lg="3">
                  <h6>Theme:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  <Form.Select
                    onChange={handleChange}
                    name="theme"
                    className="selector"
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    <option value="select">-- Select --</option>
                    {cupcake.themes ? (
                      cupcake.themes.map((item, index) => (
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
                <Col xs="3" lg="3">
                  <h6>Quantity:</h6>
                </Col>
                <Col xs="4" lg="3">
                  <Form.Select
                    aria-label="Default select example"
                    name="qty"
                    onChange={handleChange}
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    <option value="1">1 dz</option>
                    <option value="2">2 dz</option>
                    <option value="3">3 dz</option>
                    <option value="4">4 dz</option>
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
                <Col xs="3" lg="3">
                  <h6>Icing:</h6>
                </Col>
                <Col xs="9" lg="auto">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Traditional"
                        name="icing"
                        value="Traditional"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Buttercream"
                        name="icing"
                        value="Buttercream"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Cream Cheese"
                        name="icing"
                        value="Cream Cheese"
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
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <Col xs="3" lg="3">
                  <h6>Flavor:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  <Form.Select
                    aria-label="Default select example"
                    name="flavor"
                    onChange={handleChange}
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    <option value="select">-- Select --</option>
                    {cupcake.flavors ? (
                      cupcake.flavors.map((item, index) => (
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

export default OrderCupcakes;
