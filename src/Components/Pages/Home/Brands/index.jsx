import React from "react";
import { logo } from "../../../../utils/logo";
import { Container, Img, LogoWrapper } from "./style";

const Brands = () => {
  return (
    <Container>
      <LogoWrapper>
        {logo.map(
          ({ id, img, hidden }) =>
            !hidden && <Img key={id} src={img} alt="brands" />
        )}
      </LogoWrapper>
    </Container>
  );
};

export default Brands;
