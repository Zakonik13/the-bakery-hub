import React, { useState } from "react";
import { Container, Form, Dropdown } from "react-bootstrap";

// Components
import Page from "../components/Page";
import OrderCake from "../components/OrderForms/OrderCake";
import OrderPie from "../components/OrderForms/OrderPie";
import OrderCupcakes from "../components/OrderForms/OrderCupcakes";
import OrderCookies from "../components/OrderForms/OrderCookies";
import OrderExtras from "../components/OrderForms/Extras";

const OrderForm = () => {
  const [product, setProduct] = useState("Cake");

  const chosen = (event) => {
    event.preventDefault();

    setProduct(event.target.value);
  };

  return (
    <Page title="Order Form" background={{ backgroundColor: "#ffe7e750" }}>
      <Container style={{ paddingTop: "10px" }}>
        <Form className="orderform-form-style">
          <Form.Group>
            <Form.Label className="form-label">Select a category: </Form.Label>
          </Form.Group>
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "#dc5252", border: "none" }}
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
              <Dropdown.Item onClick={chosen} value="Extras" as={"button"}>
                Extras
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        <div>
          {product === "Cake" && <OrderCake />}
          {product === "Pie" && <OrderPie />}
          {product === "Cupcakes" && <OrderCupcakes />}
          {product === "Cookies" && <OrderCookies />}
          {product === "Extras" && <OrderExtras />}
        </div>
      </Container>
    </Page>
  );
};

export default OrderForm;
