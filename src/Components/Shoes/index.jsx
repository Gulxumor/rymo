import React from "react";
import { products } from "../../utils/newArrivals";
import Card from "../../Generics/Card"

import { Header, Container, Wrapper, ImageWrapper } from "../NewArrivals/style";

const Shoes = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>Running Shoes</Header>
          <Header>
            Here you can check out our new products with fair price on rymo.
          </Header>
        </div>
        <ImageWrapper>
          {products.map(
            ({ id, featuredImage, title, category, price, rating }) =>
              category === "sports" && (
                <Card
                  key={id}
                  image={featuredImage}
                  title={title}
                  price={price}
                  rate={rating}
                />
              )
          )}
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default Shoes;
