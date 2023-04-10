import React from "react";
import { logo } from "../../mock/logo";
import { Container, Img } from "./style";

const Brands = () => {
  return (
    <Container>
      {logo.map(
        ({ id, img, hidden }) =>
          !hidden && <Img key={id} src={img} alt="brands" />
      )}
    </Container>
  );
};

export default Brands;
