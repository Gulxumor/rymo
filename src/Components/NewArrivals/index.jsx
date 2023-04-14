import React from "react";
import Card from "../../Generics/Card";
import { Container, Header, ImageWrapper, Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import useProducts from "../../utils/newArrivals";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const { products } = useProducts();
  const { t } = useTranslation();
  const { navigate } = useNavigate();
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>{t("hero.new_arrivals")}</Header>
          <Header> {t("new_arrivals.description")}</Header>
        </div>
        <ImageWrapper>
          {products()?.map(
            ({ id, featuredImage, title, category, price, rating }) =>
              category === "featuredProducts" && (
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

export default NewArrivals;
