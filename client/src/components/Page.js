import React, { useEffect } from "react";
// Components
import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | The Bakery Hub`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <Container fluid>{props.children}</Container>;
}

export default Page;
