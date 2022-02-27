import React from "react";
// images
import americanPie from "../images/american-pie.jpg";
import cake from "../images/wedding-cake.jpg";
import extra from "../images/chocolate-strawberries.jpg";
import brownie from "../images/brownie.jpg";
import cookie from "../images/cookies.jpg";
import cupcake from "../images/blue-white-cupcakes.jpg";
import MenuBox from "../components/MenuBox";

const Menu = () => {
  const options = [
    {
      id: 1,
      name: "Cakes",
      image: cake,
      alt: "cakes",
    },
    {
      id: 2,
      name: "Pies",
      image: americanPie,
      alt: "pies",
    },
    {
      id: 3,
      name: "Cupcakes",
      image: cupcake,
      alt: "cupcakes",
    },
    {
      id: 4,
      name: "Brownies",
      image: brownie,
      alt: "brownies",
    },
    {
      id: 5,
      name: "Cookies",
      image: cookie,
      alt: "cookie",
    },
    {
      id: 6,
      name: "More",
      image: extra,
      alt: "more",
    },
  ];

  return (
    <div className="spacer" style={{ minHeight: "60vw" }}>
      <MenuBox options={options} />
    </div>
  );
};

export default Menu;
