import React from "react";
import { products } from "../../utils/newArrivals";
import Card from "../../Generics/Card"

import { Header, Container, Wrapper, ImageWrapper } from "../NewArrivals/style";
import { useTranslation } from "react-i18next";

const Shoes = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>{t("shoes.running_shoes")}</Header>
          <Header>{t("new_arrivals.description")}</Header>
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
