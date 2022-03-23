import React from "react";
import { Container } from "react-bootstrap";

const MenuBox = ({ options }) => {
  return (
    <Container className="menubox-container">
      {options.map((option) => (
        <div key={option.id} className="menubox-div">
          <a href={`/${option.alt}`}>
            <figure>
              <div className="box">
                <img src={option.image} className="img-size" alt={option.alt} />
                <div className="menu-title-bar">
                  <figcaption className="menu-title font-size1">
                    {option.name}
                  </figcaption>
                </div>
              </div>
            </figure>
          </a>
        </div>
      ))}
    </Container>
  );
};

export default MenuBox;
