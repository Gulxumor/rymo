import React from "react";
import Card from "../../Generics/Card";
import { products } from "../../utils/newArrivals";
import { Header, Container, Wrapper, ImageWrapper } from "../NewArrivals/style";

const Watches = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>Best Watches</Header>
          <Header>
            Here you can check out our new products with fair price on rymo.
          </Header>
        </div>
        <ImageWrapper>
          {products.map(
            ({ id, title, rating, featuredImage, category, price }) =>
              category === "watches" && (
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

export default Watches;
