import React from "react";
// import { Container, Span, Title, Text, Wrapper } from "../Hero/style";
import { Container, Title, Text, Wrapper } from "./style";
import {Button} from "../../Generics/Button";

const Sale = () => {
  return (
    <Container>
      <Wrapper>
        <Text>MID SEASON'S SALE</Text>
        <Title>Autumn Collection UP TO 20% OFF</Title>
        <Button>Shop Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Sale;
