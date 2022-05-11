import React from "react";
import { Container, Image, Carousel, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET_CAKE } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";
// Images
import WeddingCake from "../../images/wedding-cake.jpg";
import Cupcake from "../../images/blue-white-cupcakes.jpg";
// Components
import BackButton from "../BackButton";
import CarouselModal from "../CarouselModal";

const Cakes = () => {
  const { data, loading } = useQuery(GET_CAKE);

  if (loading) {
    return "Loading...";
  }

  const images = data?.cakeImages || [];
  const birthday = [WeddingCake, Cupcake];

  console.log(images);

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
      <h1 className="center-options story-body">Cakes</h1>
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
              {images &&
                images.map((item, index) => {
                  console.log(item.link) && (
                    <Carousel.Item id={index}>
                      <Image src={item.link} />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Cakes;
