import React from "react";
import { Carousel, Image, Modal } from "react-bootstrap";

const CarouselModal = ({ cakes }) => {
  return (
    <>
      <Modal>
        <Carousel interval={null}>
          {cakes.map((item, index) => {
            <Carousel.Item>
              <Image src={item} />
            </Carousel.Item>;
          })}
        </Carousel>
      </Modal>
    </>
  );
};

export default CarouselModal;
