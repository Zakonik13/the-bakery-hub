import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";

const OrderPie = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Pie",
    flavor: "Select",
    size: "",
    qty: 0,
    text: "",
  });

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
                      <option style={{ display: "none" }}>-- Select --</option>
                      <option value="Select" style={{ display: "none" }}>
                        -- Select --
                      </option>
                      <option
                        value="14"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $14 each - Cream Pies --
                      </option>
                      <option value="Chocolate">Chocolate</option>
                      <option value="Vanilla">Vanilla</option>
                      <option value="Coconut">Coconut</option>
                      <option value="Peanut Butter">Peanut Butter</option>
                      <option value="Lemon">Lemon</option>
                      <option value="Butterscotch">Butterscotch</option>
                      <option
                        value="15"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $15 each - Fruit Pies --
                      </option>
                      <option value="Apple">Apple</option>
                      <option value="Blueberry">Blueberry</option>
                      <option value="Cherry">Cherry</option>
                      <option value="Peach">Peach</option>
                      <option value="Fresh Strawberry in Gel">
                        Fresh Strawberry in Gel
                      </option>
                      <option
                        value="16"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $16 each - Chess Pies --
                      </option>
                      <option value="Chocolate Chess">Chocolate Chess</option>
                    </Form.Select>
                  ) : (
                    <Form.Select
                      aria-label="Default select example"
                      name="flavor"
                      onChange={handleChange}
                    >
                      <option value="Select" style={{ display: "none" }}>
                        -- Select --
                      </option>
                      <option
                        value="Cream"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $5 each - Cream Pies --
                      </option>
                      <option value="Chocolate">Chocolate</option>
                      <option value="Vanilla">Vanilla</option>
                      <option value="Coconut">Coconut</option>
                      <option value="Peanut Butter">Peanut Butter</option>
                      <option value="Lemon">Lemon</option>
                      <option value="Butterscotch">Butterscotch</option>
                      <option
                        value="Fruit"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $5 each - Fruit Pies --
                      </option>
                      <option value="Apple">Apple</option>
                      <option value="Blueberry">Blueberry</option>
                      <option value="Cherry">Cherry</option>
                      <option value="Peach">Peach</option>
                      <option value="Fresh Strawberry in Gel">
                        Fresh Strawberry in Gel
                      </option>
                      <option
                        value="Chess"
                        disabled
                        style={{ fontWeight: "bold" }}
                      >
                        -- $5 each - Chess Pies --
                      </option>
                      <option value="Chocolate Chess">Chocolate Chess</option>
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
