import { Container, ImageWrapper, Title, Price } from "./style";
import { Rate } from "antd";
import { Button } from "../Button";
export const Card = ({ product, onClick }) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <Container onClick={onClick}>
      <Container.Wrapper>
        <ImageWrapper>
          <ImageWrapper.Image
            src={product?.featuredImage}
            alt={product?.title || "card"}
          />
        </ImageWrapper>
        <Container.Wrapper.Content>
          <Rate
            name="half-rating"
            defaultValue={product?.rating[0]}
            precision={product?.rating[1]}
          />
          <Title>{product?.title}</Title>
          <Price>{formatter.format(product?.price)}</Price>
          <Button type="secondary">Buy Now</Button>
        </Container.Wrapper.Content>
      </Container.Wrapper>
    </Container>
  );
};

export default Card;
