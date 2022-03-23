import React from "react";
import { Container, Image, Carousel, Button } from "react-bootstrap";
// Images
import WeddingCake from "../images/wedding-cake.jpg";
import Cupcake from "../images/blue-white-cupcakes.jpg";

const Cookies = () => {
  return (
    <div className="spacer">
      <Button
        className="call-to-action"
        style={{ backgroundColor: "#b33e3e", border: "none" }}
      >
        Place Order
      </Button>
      <h1 className="center-options">Cookies</h1>
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

export default Cookies;

// <div className="spacer">
//   <ul>
//     <h4>$7.00 per dozen</h4>
//     <li>Chocolate Chip</li>
//     <li>Oatmeal</li>
//     <li>Peanute Butter</li>
//     <li>Snickerdoodles</li>
//     <li>Sugar</li>
//   </ul>
//   <ul>
//     <h4>$8.00 per dozen</h4>
//     <li>PB Chocolate Chip</li>
//     <li>Rocky Roads</li>
//     <li>Oatmeal Raisin</li>
//   </ul>
//   <ul>
//     <h4>$9.00 per dozen</h4>
//     <li>Chocolate Delights</li>
//     <li>Apple Jumbles</li>
//   </ul>
//   <ul>
//     <h4>$10.00 per dozen</h4>
//     <li>Iced Butters</li>
//     <h4>$14.00 per dozen</h4>
//     <li>Winter Apple</li>
//   </ul>
// </div>
