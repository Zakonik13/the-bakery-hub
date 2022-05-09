import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
// Components
import Page from "../components/Page";
import CakeCart from "../components/CartComponents/CakeCart";
import PieCart from "../components/CartComponents/PieCart";
import CupcakeCart from "../components/CartComponents/CupcakeCart";
import CookieCart from "../components/CartComponents/CookieCart";
import BrownieCart from "../components/CartComponents/BrownieCart";
import EmptyCartModal from "../components/Modals/EmptyCartModal";
import ContactModal from "../components/Modals/ContactModal";

const Cart = () => {
  const [state] = useStoreContext();
  const cart = state.cart;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // first modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // second modal
  const [showContact, setShowContact] = useState(false);
  const closeContact = () => {
    setShowContact(false);
    window.location.assign("/cart");
  };
  const openContact = () => setShowContact(true);
  // third modal
  const [showCompleted, setShowCompleted] = useState(false);
  const openCompleted = () => setShowCompleted(true);

  // format for email use only
  let newCart = null;
  if (cart.length > 0) {
    newCart = {
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
  }

  const submitOrder = () => {
    if (newCart === null) {
      handleShow();
    } else {
      openContact();
    }
  };

  const sendOrder = async () => {
    emailjs.init("qT0i4Uwmy4j9Ut0O7");

    let templateParams = Object.assign(formState, newCart);

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
    localStorage.clear();
    closeContact();
  };

  return (
    <Page title="Cart" background={{ backgroundColor: "#ffe7e799" }}>
      {/* show when submit order button is pressed if cart is empty */}
      <EmptyCartModal show={show} handleClose={handleClose} />
      {/* show contact form when submit order button is pressed if items are in cart */}
      <ContactModal
        showContact={showContact}
        closeContact={closeContact}
        handleChange={handleChange}
        openCompleted={openCompleted}
        showCompleted={showCompleted}
        sendOrder={sendOrder}
      />
      <Container style={{ paddingTop: "40px" }}>
        <div
          style={{
            borderRadius: "15px",
            boxShadow: "6px 2px 15px #00000040",
          }}
        >
          <Row>
            <center>
              <h1>Your Cart</h1>
            </center>
          </Row>

          <Row
            className={
              cart.length > 2
                ? "product-spacing-start"
                : "product-spacing-center"
            }
          >
            {cart.length < 1 ? (
              <Row style={{ paddingTop: "20px" }}>
                <center>
                  <Row>
                    <h3 className="center-options">Your Cart is empty.</h3>
                  </Row>
                  <Row>
                    <h4>
                      If you would like to start an order, click here!{" "}
                      <Link to="/order-form">
                        <Button
                          style={{ backgroundColor: "#b33e3e", border: "none" }}
                        >
                          Order
                        </Button>
                      </Link>
                    </h4>
                  </Row>
                </center>
              </Row>
            ) : (
              cart.map((item, index) => (
                <Col
                  lg="4"
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {item.product === "Cake" && (
                    <CakeCart item={item} index={index} />
                  )}
                  {item.product === "Pie" && (
                    <PieCart cart={cart} item={item} index={index} />
                  )}
                  {item.product === "Cupcakes" && (
                    <CupcakeCart item={item} index={index} />
                  )}
                  {item.product === "Cookies" && (
                    <CookieCart item={item} index={index} />
                  )}
                  {item.product === "Brownies" && (
                    <BrownieCart item={item} index={index} />
                  )}
                </Col>
              ))
            )}
          </Row>
          <Row>
            <center>
              <p
                style={{
                  marginTop: "55px",
                  marginBottom: "-15px",
                  fontSize: "13px",
                }}
              >
                Your order will be sent for review and you will receive an email
                with your total. Payment is processed at pickup.
              </p>
            </center>
          </Row>
          <Row>
            <center>
              <Button
                onClick={submitOrder}
                style={{
                  backgroundColor: "#b33e3e",
                  border: "none",
                  margin: "20px 0",
                }}
              >
                Submit Order
              </Button>
            </center>
          </Row>
        </div>
      </Container>
    </Page>
  );
};

export default Cart;
