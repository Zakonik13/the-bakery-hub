import React from "react";
import { Image } from "react-bootstrap";
// Images
import Cupcakes from "../images/theCupcake.jpg";

const MenuBox = ({ options }) => {
  return <Image src={Cupcakes} fluid />;
};

export default MenuBox;
