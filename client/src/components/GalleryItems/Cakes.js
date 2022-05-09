import React from "react";
import { Container, Image, Carousel, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET_CAKE_IMAGE } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";
// Images
import WeddingCake from "../../images/wedding-cake.jpg";
import Cupcake from "../../images/blue-white-cupcakes.jpg";
// Components
import BackButton from "../BackButton";
import CarouselModal from "../CarouselModal";

const Cakes = () => {
  const { data, loading } = useQuery(GET_CAKE_IMAGE);

  if (loading) {
    return "Loading...";
  }

  const images = data?.cakeImages || [];
  const birthday = [WeddingCake, Cupcake];

  return (
    <div className="spacer">
      <CarouselModal cakes={birthday} />

      <Link to="/order-form">
        <Button
          className="call-to-action"
          style={{ backgroundColor: "#b33e3e", border: "none" }}
        >
          Place Order
        </Button>
      </Link>
      <div>
        <BackButton />
      </div>
      <h1 className="center-options story-body">Cakes</h1>
      <Container>
        <Row style={{ margin: "25px 0" }}>
          <div className="center-options">
            <Image
              src="https://i.imgur.com/oPeNFp3.jpg"
              height="300px"
              width="300px"
            />
            {/* <Image src={WeddingCake} /> */}
            {images.map((item) => {
              <Image src={item.link} height="300px" width="300px" />;
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Cakes;
