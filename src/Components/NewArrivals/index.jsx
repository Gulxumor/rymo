import React from "react";
import { products } from "../../utils/newArrivals";
import Card from "../../Generics/Card";
import { Container, Header, ImageWrapper, Wrapper } from "./style";
import { useTranslation } from "react-i18next";

const NewArrivals = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>{t("hero.new_arrivals")}</Header>
          <Header> {t("new_arrivals.description")}</Header>
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
