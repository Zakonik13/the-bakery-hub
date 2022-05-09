import React from "react";
// images
import americanPie from "../images/american-pie.jpg";
import cake from "../images/wedding-cake.jpg";
import extra from "../images/chocolate-strawberries.jpg";
import cookie from "../images/cookies.jpg";
import GalleryBox from "../components/GalleryItems/GalleryBox";
// Components
import Page from "../components/Page";

const Gallery = () => {
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
      name: "Cookies",
      image: cookie,
      alt: "cookies",
    },
    {
      id: 4,
      name: "More",
      image: extra,
      alt: "more",
    },
  ];

  return (
    <Page title="Gallery">
      <GalleryBox options={options} />
    </Page>
  );
};

export default Gallery;
