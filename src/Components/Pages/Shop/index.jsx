import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../../generics/Card";
import useProducts from "../../../utils/newArrivals";
import { ImageWrapper } from "../../Pages/Home/NewArrivals/style";
import { Container, Text, Title, Wrapper } from "./style";

const Shop = () => {
  const { t } = useTranslation();
  const { products } = useProducts();
  return (
    <Container>
      <Wrapper>
        <Title>{t("shop.title")}</Title>
        <Text>{t("new_arrivals.description")}</Text>
        <ImageWrapper g>
          {products().map(({ id, featuredImage, title, price, rating }) => (
            <Card
              key={id}
              image={featuredImage}
              title={title}
              price={price}
              rate={rating}
            />
          ))}
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
};

export default Shop;
