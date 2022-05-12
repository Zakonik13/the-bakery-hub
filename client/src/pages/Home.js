import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Col, Row, Container, Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_HOMEPAGE } from "../utils/queries";
import { ADD_HOMEPAGE } from "../utils/mutations";
// Images
import Thornberry from "../images/Thornberry.jpg";
// Components
import Page from "../components/Page";
import Hero from "../components/Hero";

const Home = () => {
  const [addHomePage] = useMutation(ADD_HOMEPAGE);
  const { data, loading } = useQuery(GET_HOMEPAGE);
  const [formState, setFormState] = useState({
    home_image: "http://localhost:3000/static/media/theCupcake.7bc09beb.jpg",
    home_paragraph1:
      "At The Bakery Hub, we are third generation Thornberry's owned and operated. We have been serving our community for over 60 years and can't wait for the next 100 years to come. We serve fresh baked goods to order and can take your order today. Browse our gallery or click here to start ordering now.",
    home_paragraph2:
      "Are you looking for a special gift for a friend, or need a custom dessert for your company’s branding, event or advertising campaign? Try one of our custom cakes and be amazed. Our expert cake bakers can turn out a cake exactly to your specifications – you can choose the flavours, icing, lettering and anything else, as long as it’s within our means.",
    home_paragraph3:
      "Our baked goods are always fresh and homemade and they always will be. On top of that, we offer our goods at affordable prices, meaning that everybody can enjoy fresh, wholesome bakery items every single day. We pride ourselves on being able to offer quality services with a friendly face, and our customers will attest to it. Sound good? Of course it does.",
  });

  const home = data?.homepage || {};

  const background = { backgroundColor: "#ffe7e799" };

  return (
    <Page title="Home" background={background}>
      <Hero className="hero" hero={home.hero_image} />

      <Link to="/order-form">
        <Button
          className="call-to-action"
          style={{ backgroundColor: "#dc5252", border: "none" }}
        >
          Order
        </Button>
      </Link>

      <Container>
        <Row
          className="g-0 story"
          style={{
            marginTop: "50px",
          }}
        >
          <Col
            md="auto"
            lg="6"
            style={{
              boxShadow: "6px 2px 15px #00000040",
              borderRadius: "15px",
            }}
          >
            <center style={{ margin: "8% 4%" }}>
              <div
                className="story"
                style={{
                  maxWidth: "280px",
                }}
              >
                <h2 className="story-title">The Bakery Hub; Thornberry's</h2>
              </div>
              <div
                style={{
                  maxWidth: "600px",
                  marginTop: "20px",
                }}
              >
                <p className="story-body">
                  {home.home_paragraph1 || "loading..."}
                </p>
              </div>
            </center>
          </Col>
          <Col xs="1" md="1" lg="1" />
          <Col md="5" lg="5">
            <div className="image-center">
              <Image
                src={Thornberry}
                height="350px"
                style={{
                  borderRadius: "15px",
                  boxShadow: "6px 2px 15px #00000040",
                }}
              />
            </div>
          </Col>
        </Row>

        <Row
          className="g-0 story"
          style={{
            marginTop: "50px",
            boxShadow: "6px 2px 15px #00000040",
            borderRadius: "15px",
          }}
        >
          <div
            className="story"
            style={{
              backgroundColor: "#00000000",
              border: "none",
              borderRadius: "15px",
              maxWidth: "280px",
              margin: "auto 0",
              padding: "5px",
              float: "left",
            }}
          >
            <h2 className="story-title">Custom Orders</h2>
          </div>
          <div
            style={{
              backgroundColor: "#00000000",
              border: "none",
              borderRadius: "15px",
              maxWidth: "600px",
              marginTop: "20px",
              padding: "5px",
              float: "right",
            }}
          >
            <p className="story-body">{home.home_paragraph2 || "loading..."}</p>
          </div>
        </Row>

        <Row
          className="g-0 story"
          style={{
            boxShadow: "6px 2px 15px #00000040",
            borderRadius: "15px",
            marginTop: "50px",
          }}
        >
          <div
            className="story"
            style={{
              backgroundColor: "#00000000",
              border: "none",
              borderRadius: "15px",
              maxWidth: "280px",
              margin: "auto 0",
              padding: "5px",
              float: "left",
            }}
          >
            <h2 className="story-title">Quality Baking Services</h2>
          </div>
          <div
            style={{
              backgroundColor: "#00000000",
              border: "none",
              borderRadius: "15px",
              maxWidth: "600px",
              marginTop: "20px",
              padding: "5px",
              float: "right",
            }}
          >
            <p className="story-body">{home.home_paragraph3 || "loading..."}</p>
          </div>
        </Row>
      </Container>
    </Page>
  );
};

export default Home;
