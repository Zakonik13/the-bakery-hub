import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";

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
                    className="selector"
                    style={{
                      border: "none",
                      boxShadow: "2px 2px 8px #00000040",
                    }}
                  >
                    {" "}
                    <option value="Birthday">Birthday</option>;
                    <option value="Sweet 16">Sweet 16</option>
                    <option value="One Month Anniversary">
                      One Month Anniversary
                    </option>
                    <option value="Bridal Shower">Bridal Shower</option>
                    <option value="Groomsmen">Groomsmen Cake</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Work">Work Party</option>
                    <option
                      value="holidays"
                      disabled
                      style={{ fontWeight: "bold" }}
                    >
                      -- Holidays --
                    </option>
                    <option value="New Year's">New Year's</option>
                    <option value="Valentine's">Valentine's Day</option>
                    <option value="St Patrick">St. Patrick's Day</option>
                    <option value="Easter">Easter</option>
                    <option value="April Fools">April Fool's Day</option>
                    <option value="Mother's Day">Mother's Day</option>
                    <option value="Father's Day">Father's Day</option>
                    <option value="Memorial">Memorial Day</option>
                    <option value="Labor">Labor Day</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Veterans">Veteran's Day</option>
                    <option value="4th of July">4th of July</option>
                    <option value="Halloween">Halloween</option>
                    <option value="Thanksgiving">Thanksgiving</option>
                    <option value="Christmas">Christmas</option>
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
                    <option value="Select" hidden>
                      Select
                    </option>
                    <option value="Caramel Apple">Caramel Apple</option>
                    <option value="Carrot">Carrot</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Chocolate Chip">Chocolate Chip</option>
                    <option value="Citrus">Citrus Cake</option>
                    <option value="Coconut">Coconut</option>
                    <option value="Funfetti">Funfetti</option>
                    <option value="Lemon">Lemon</option>
                    <option value="Lemon Raspberry">Lemon Raspberry</option>
                    <option value="Oreo">Oreo</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Spice">Spice</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>
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
