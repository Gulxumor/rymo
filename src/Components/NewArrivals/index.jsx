import React from "react";
import { products } from "../../mock/newArrivals";
import Card from "../Generics/Card";
import { Container, Header, ImageWrapper, Wrapper } from "./style";

const NewArrivals = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>New Arrivals</Header>
          <Header>
            Here you can check out our new products with fair price on rymo.
          </Header>
        </div>
        <ImageWrapper>
          {products.map(
            ({ id, featuredImage, title, category, price, rating }) =>
              category === "featuredProducts" && (
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

export default NewArrivals;