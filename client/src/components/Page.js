import React, { useEffect } from "react";
// Components
import Container from "./Container";

function Page(props) {
  const { background } = props;
  useEffect(() => {
    document.title = `${props.title} | The Bakery Hub`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <Container fluid>
      <div className="page" style={background}>
        {props.children}
      </div>
    </Container>
  );
}

export default Page;
