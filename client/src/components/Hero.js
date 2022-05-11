import React from "react";
import { Image } from "react-bootstrap";
// Images
import Cupcakes from "../images/theCupcake.jpg";

const Hero = ({ hero }) => {
  console.log(hero);

  const heroImage = hero || Cupcakes;

  return <Image src={heroImage} fluid />;
};

export default Hero;
