import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Card from "../../Generics/Card";
import useProducts from "../../utils/newArrivals";
import { ImageWrapper } from "../NewArrivals/style";
import { Container, Text, Title, Wrapper } from "./style";

const Shop = () => {
  const { t } = useTranslation();
  const { products } = useProducts();
  const { navigate } = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>{t("shop.title")}</Title>
        <Text>{t("new_arrivals.description")}</Text>
        <ImageWrapper g>
          {products().map(
            ({ id, featuredImage, title, price, rating }) => (
              <Card
                onClick={() => navigate("/product")}
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

export default Shop;
