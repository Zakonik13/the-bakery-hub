import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAKE } from "../../utils/queries";

const OrderCake = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Cake",
    theme: "select",
    qty: 1,
    type: "",
    size: "",
    tier: "",
    icing: "",
    flavor: "select",
    text: "",
  });

  const { data } = useQuery(GET_CAKE);
  const cake = data?.cake || {};
  console.log(formState);

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
          if (val === "select") {
            test = "fail";
          }
        case "flavor":
          if (val === "select") {
            test = "fail";
          }
          break;
        case "icing":
          if (val === "") {
            test = "fail";
          }
          break;
        case "style":
          if (val === "") {
            test = "fail";
          }
          break;
        case "size":
          if (val === "") {
            test = "fail";
          }
          break;
        case "tier":
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
        product: "Cake",
        theme: "select",
        qty: 1,
        type: "",
        size: "",
        tier: "",
        icing: "",
        flavor: "select",
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
                    className="selector"
                    name="theme"
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    <option value="select">-- Select --</option>
                    {cake.themes ? (
                      cake.themes.map((item, index) => (
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
                <Col xs="3" lg="2">
                  <Form.Select
                    aria-label="Default select example"
                    name="qty"
                    onChange={handleChange}
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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
                  <h6>Style:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  {/* <div>
                    <input
                      type="radio"
                      name="type"
                      value="Round"
                      label="Round"
                    />
                    <input
                      type="radio"
                      name="type"
                      value="Sheet"
                      label="Sheet"
                    />
                  </div> */}
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Round"
                        name="type"
                        value="Round"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Sheet"
                        name="type"
                        value="Sheet"
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
                <Col xs="3" lg="3">
                  <h6>Size:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      {formState.type === "Round" ? (
                        <>
                          <Form.Check
                            inline
                            label='8"'
                            name="size"
                            value="8"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label='10"'
                            name="size"
                            value="10"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={handleChange}
                          />
                        </>
                      ) : (
                        <>
                          <Form.Check
                            inline
                            label="1/4"
                            name="size"
                            value="1/4"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            label="1/2"
                            name="size"
                            value="1/2"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={handleChange}
                          />
                        </>
                      )}
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
                  <h6>Tiers:</h6>
                </Col>
                <Col xs="8" lg="auto">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="1"
                        name="tier"
                        value="1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="2"
                        name="tier"
                        value="2"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="3"
                        name="tier"
                        value="3"
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
                  marginBottom: "60px",
                }}
              >
                <Col xs="3" lg="3">
                  <h6>Icing:</h6>
                </Col>
                <Col xs="9" lg="5">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Traditional White"
                        name="icing"
                        value="Traditional White"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleChange}
                      />
                      <Form.Check
                        inline
                        label="Traditional Chocolate"
                        name="icing"
                        value="Traditional Chocolate"
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
                    {cake.flavors ? (
                      cake.flavors.map((item, index) => (
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

export default OrderCake;
