import React from "react";
import { Link } from "react-router-dom";
import { Image, Row, Container, Button } from "react-bootstrap";
// Images
import Thornberry from "../images/Thornberry.jpg";
// Components
import Page from "../components/Page";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Page title="Home">
      <Hero />

      <Link to="/order-form">
        <Button
          className="call-to-action"
          style={{ backgroundColor: "#b33e3e", border: "none" }}
        >
          Order
        </Button>
      </Link>

      <Container className="text-container">
        <Row className="g-0">
          <p className="main-title">Our History...</p>
        </Row>
        <div className="image-center">
          <Image src={Thornberry} fluid />
        </div>

        <Row className="g-0 story top-story">
          <h2>The Bakery Hub; Thornberry's</h2>
        </Row>
        <Row className="story">
          <p>
            At The Bakery Hub, we are third generation Thornberry's owned and
            operated. We have been serving our community for over 60 years and
            can't wait for the next 100 years to come. We serve fresh baked
            goods to order and can take your order today. Browse our menu or{" "}
            <span>
              <a href="/contact">click here</a>
            </span>{" "}
            to start ordering now.
          </p>
        </Row>
        <Row className="story">
          <h2>Custom Orders</h2>
        </Row>
        <Row className="story">
          <p>
            Are you looking for a special gift for a friend, or need a custom
            dessert for your company’s branding, event or advertising campaign?
            Try one of our custom cakes and be amazed. Our expert cake bakers
            can turn out a cake exactly to your specifications – you can choose
            the flavours, icing, lettering and anything else, as long as it’s
            within our means.
          </p>
        </Row>
        <Row className="story">
          <h2>Quality Baking Services</h2>
        </Row>
        <Row className="story">
          <p>
            Our baked goods are always fresh and homemade and they always will
            be. On top of that, we offer our goods at affordable prices, meaning
            that everybody can enjoy fresh, wholesome bakery items every single
            day. We pride ourselves on being able to offer quality services with
            a friendly face, and our customers will attest to it. Sound good? Of
            course it does.
          </p>
        </Row>
      </Container>
    </Page>
  );
};

export default Home;
