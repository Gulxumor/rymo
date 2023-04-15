import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../Generics/Card";
import useProducts from "../../utils/newArrivals";
import { Header, Container, Wrapper, ImageWrapper } from "../NewArrivals/style";

const Watches = () => {
  const { products } = useProducts();
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <div>
          <Header h>{t("watches.best_watches")}</Header>
          <Header>{t("new_arrivals.description")} </Header>
        </div>
        <ImageWrapper>
          {products()?.map(
            ({ id, title, rating, featuredImage, category, price }) =>
              category === "watches" && (
                <Card
                  key={id}
                  id={id}
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
