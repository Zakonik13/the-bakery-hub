import React from "react";
import { Container, Image, Carousel, Button } from "react-bootstrap";
// Images
import WeddingCake from "../images/wedding-cake.jpg";
import Cupcake from "../images/blue-white-cupcakes.jpg";

const Pies = () => {
  return (
    <div className="spacer">
      <Button
        className="call-to-action"
        style={{ backgroundColor: "#b33e3e", border: "none" }}
      >
        Place Order
      </Button>
      <h1 className="center-options">Pies</h1>
      <hr />
      <Container>
        <h2 className="center-options">Birthday</h2>
        <div className="center-options">
          <Carousel interval={null}>
            <Carousel.Item>
              <Image src={WeddingCake} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Cupcake} />
            </Carousel.Item>
          </Carousel>
        </div>
        <h2 className="center-options">Wedding</h2>
        <div className="center-options">
          <Carousel interval={null}>
            <Carousel.Item>
              <Image src={WeddingCake} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Cupcake} />
            </Carousel.Item>
          </Carousel>
        </div>
        <h2 className="center-options">Other Occasion</h2>
        <div className="center-options">
          <Carousel interval={null}>
            <Carousel.Item>
              <Image src={WeddingCake} />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={Cupcake} />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Pies;
