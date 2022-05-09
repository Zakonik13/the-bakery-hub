import React from "react";
import { Container, Image, Carousel, Button, Row } from "react-bootstrap";
// Images
import WeddingCake from "../../images/wedding-cake.jpg";
import Cupcake from "../../images/blue-white-cupcakes.jpg";
// Components
import BackButton from "../BackButton";

const More = () => {
  return (
    <div className="spacer">
      <Button
        className="call-to-action"
        style={{ backgroundColor: "#b33e3e", border: "none" }}
      >
        Place Order
      </Button>
      <div>
        <BackButton />
      </div>
      <h1 className="center-options story-body">More Delightful Treats!</h1>
      <Container>
        <Row style={{ margin: "25px 0" }}>
          <div className="center-options">
            <Carousel
              interval={null}
              style={{
                boxShadow: "6px 2px 15px #00000060",
                borderRadius: "15px",
              }}
            >
              <Carousel.Item>
                <Image src={WeddingCake} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={Cupcake} />
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default More;
