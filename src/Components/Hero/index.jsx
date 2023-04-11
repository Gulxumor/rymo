import React from "react";
import { Container, Span, Title, Text, TopText, Wrapper } from "./style";
import { Button } from "../Generics/Button";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TopText>New Arrivals</TopText>
        <Title>
          <Span>Best Practice</Span> This Year
        </Title>
        <Text>
          Shoomotic offers your very comfortable time on walking and exercises
        </Text>
        <Button b>Shop Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Hero;
