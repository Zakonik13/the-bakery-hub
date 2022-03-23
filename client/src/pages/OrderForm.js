import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";

// Components
import Page from "../components/Page";
import OrderCake from "../components/OrderCake";
import OrderPie from "../components/OrderPie";
import OrderCupcakes from "../components/OrderCupcakes";
import OrderCookies from "../components/OrderCookies";

const OrderForm = () => {
  const [product, setProduct] = useState("Cake");

  const chosen = (event) => {
    event.preventDefault();
    console.log(event.target.value);

    setProduct(event.target.value);
  };

  return (
    <Page title="Order Form">
      <Container style={{ paddingTop: "10px" }}>
        <Form className="orderform-form-style">
          <Form.Group>
            <Form.Label className="form-label">Select a product: </Form.Label>
          </Form.Group>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#b33e3e", border: "none" }}
            >
              {product}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={chosen} value="Cake" as={"button"}>
                Cake
              </Dropdown.Item>
              <Dropdown.Item onClick={chosen} value="Pie" as={"button"}>
                Pie
              </Dropdown.Item>
              <Dropdown.Item onClick={chosen} value="Cupcakes" as={"button"}>
                Cupcakes
              </Dropdown.Item>
              <Dropdown.Item onClick={chosen} value="Cookies" as={"button"}>
                Cookies
              </Dropdown.Item>
              <Dropdown.Item onClick={chosen} value="Brownies" as={"button"}>
                Brownies
              </Dropdown.Item>
              <Dropdown.Item onClick={chosen} value="Other" as={"button"}>
                Other
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        <div className="div-order-form">
          {product === "Cake" && <OrderCake />}
          {product === "Pie" && <OrderPie />}
          {product === "Cupcakes" && <OrderCupcakes />}
          {product === "Cookies" && <OrderCookies />}
        </div>
      </Container>
    </Page>
  );
};

export default OrderForm;
