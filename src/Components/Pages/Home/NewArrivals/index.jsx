import Card from "../../../../generics/Card";
import { Container, Header, ImageWrapper, Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import useProducts from "../../../../utils/newArrivals";

const NewArrivals = () => {
  const { products } = useProducts();
  const { t } = useTranslation();

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

export default NewArrivals;
