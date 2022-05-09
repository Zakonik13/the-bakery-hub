import React, { useState } from "react";
import { Button, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { UPDATE_CART } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";

const OrderCookies = () => {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({
    product: "Cookies",
    flavor: "Select",
    qty: 1,
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

  console.log(formState);

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
                    <option value="Select" style={{ display: "none" }}>
                      -- Select --
                    </option>
                    <option value="8" disabled style={{ fontWeight: "bold" }}>
                      -- $8 per dozen --
                    </option>
                    <option value="Chocolate Chip">Chocolate Chip</option>
                    <option value="Oatmeal">Oatmeal</option>
                    <option value="Peanut Butter">Peanut Butter</option>
                    <option value="Snickerdoodle">Snickerdoodle</option>
                    <option value="Sugar">Sugar</option>
                    <option value="9" disabled style={{ fontWeight: "bold" }}>
                      -- $9 per dozen --
                    </option>
                    <option value="Peanut Butter Chocolate Chip">
                      Peanut Butter Chocolate Chip
                    </option>
                    <option value="Rocky Road">Rocky Road</option>
                    <option value="Oatmeal Raisin">Oatmeal Raisin</option>
                    <option value="10" disabled style={{ fontWeight: "bold" }}>
                      -- $10 per dozen --
                    </option>
                    <option value="Chocolate Delights">
                      Chocolate Delights
                    </option>
                    <option value="Apple Jumbles">Apple Jumbles</option>
                    <option value="12" disabled style={{ fontWeight: "bold" }}>
                      -- $12 per dozen --
                    </option>
                    <option value="Iced Butter">
                      Iced Butter (Circle; No decoration)
                    </option>
                    <option value="14" disabled style={{ fontWeight: "bold" }}>
                      -- $14 per dozen --
                    </option>
                    <option value="Winter Apple">Winter Apple</option>
                    <option value="Treasure">Treasure</option>
                    <option value="Iced Butter">Iced Butter (Designer)</option>
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

{
  /* <div>
          <label className="margin-top float-left" htmlFor="color">
            Flavor:{" "}
          </label>
          <div className="float-right">
            <select
              className="margin-top color"
              name="flavor"
              id="flavor"
              onChange={handleChange}
            >
              <option value="select" style={{ display: "none" }}>
                -- Select --
              </option>
              <option value="8" disabled>
                $8 per dozen
              </option>
              <option value="Chocolate Chip">Chocolate Chip</option>
              <option value="Oatmeal">Oatmeal</option>
              <option value="Peanut Butter">Peanut Butter</option>
              <option value="Snickerdoodle">Snickerdoodle</option>
              <option value="Sugar">Sugar</option>
              <option value="9" disabled>
                $9 per dozen
              </option>
              <option value="Peanut Butter Chocolate Chip">
                Peanut Butter Chocolate Chip
              </option>
              <option value="Rocky Road">Rocky Road</option>
              <option value="Oatmeal Raisin">Oatmeal Raisin</option>
              <option value="10" disabled>
                $10 per dozen
              </option>
              <option value="Chocolate Delights">Chocolate Delights</option>
              <option value="Apple Jumbles">Apple Jumbles</option>
              <option value="12" disabled>
                $12 per dozen
              </option>
              <option value="Iced Butter">
                Iced Butter (Circle; No decoration)
              </option>
              <option value="14" disabled>
                $14 per dozen
              </option>
              <option value="Winter Apple">Winter Apple</option>
              <option value="Treasure">Treasure</option>
              <option value="Iced Butter">Iced Butter (Designer)</option>
            </select>

            <select
              className="margin-top floatRight"
              name="qty"
              id="qty"
              onChange={handleChange}
            >
              <option value="0 dz">0 dz</option>
              <option value="1 dz">1 dz</option>
              <option value="2 dz">2 dz</option>
              <option value="3 dz">3 dz</option>
              <option value="4 dz">4 dz</option>
            </select>
            <label className="margin-top color floatRight" htmlFor="qty">
              Qty:{" "}
            </label>
          </div>
        </div>
        <br />

     
        <div className="margin-top four">
          <label className="float-left" htmlFor="text">
            Special Request:{" "}
          </label>
          <textarea
            className="float-right"
            placeholder="Detailed instructions"
            name="text"
            id="text"
            cols="40"
            rows="7"
          ></textarea>
        </div>
        <div className="button">
          <Button
            onClick={handleForm}
            type="submit"
            style={{ backgroundColor: "#b33e3e", border: "none" }}
          >
            Add to Cart
          </Button>
        </div> */
}
