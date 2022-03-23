import React, { useState, useEffect } from "react";
import { UPDATE_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
// Components
import Page from "./Page";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state);
  const storage = localStorage.getItem("cart");
  const cart = JSON.parse(storage);

  const newCart = {
    product_one: cart[0],
    product_two: cart[1],
    product_three: cart[2],
    product_four: cart[3],
    product_five: cart[4],
    product_six: cart[5],
    product_seven: cart[6],
    product_eight: cart[7],
    product_nine: cart[8],
    product_ten: cart[9],
  };

  const templateParams = newCart;

  const sendOrder = async () => {
    emailjs.init("qT0i4Uwmy4j9Ut0O7");

    await emailjs
      .send("service_4jjbznn", "template_kieez3o", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response);
        },
        function (error) {
          console.log("FAILED", error);
        }
      );
  };

  return (
    <Page>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            {item.product === "cake" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}{" "}
                  Cake
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
            {item.product === "pie" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}Pie
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
            {item.product === "cupcakes" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}{" "}
                  Cupcakes
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
            {item.product === "cookies" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}{" "}
                  Cookies
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
            {item.product === "brownies" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}{" "}
                  Brownies
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
            {item.product === "other" && (
              <div>
                <h4>
                  {item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}{" "}
                  Other
                </h4>
                <ul>
                  <li>Product: {item.product}</li>
                  <li>Qty:</li>
                  <li>Flavor: {item.flavor}</li>
                  <li>Theme: {item.theme}</li>
                  <li>Icing: {item.icing}</li>
                  <li>Size: {item.size}</li>
                  <li>Tier: {item.tier}</li>
                  <li>Instructions: {item.text}</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <Button
        onClick={sendOrder}
        type="submit"
        style={{ backgroundColor: "#b33e3e", border: "none" }}
      >
        Submit Order
      </Button>
    </Page>
  );
};

export default Cart;
