import React from "react";
import { Container, Col } from "react-bootstrap";

const GalleryBox = ({ options }) => {
  return (
    <Container className="menubox-container">
      {options.map((option) => (
        <Col
          xs="auto"
          sm="5"
          md="auto"
          lg="4"
          key={option.id}
          style={{ margin: "0px 15px 0px 15px" }}
        >
          <center>
            <a href={`/${option.alt}`}>
              <figure>
                <div className="box">
                  <img
                    src={option.image}
                    className="img-size"
                    alt={option.alt}
                    style={{
                      boxShadow: "6px 2px 15px #00000080",
                    }}
                  />
                  <div className="menu-title-bar">
                    <figcaption className="menu-title font-size1">
                      {option.name}
                    </figcaption>
                  </div>
                </div>
              </figure>
            </a>
          </center>
        </Col>
      ))}
    </Container>
  );
};

export default GalleryBox;
