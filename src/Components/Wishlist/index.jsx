// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "../../generics/Card/index.jsx";
import useProducts from "../../utils/newArrivals.js";
import { Container, Description, Products, Title, Wrapper } from "./style";

export const Wishlist = () => {
  // const data = useSelector((state) => state);
  const product = useProducts()
  const navigate = useNavigate();
  const products = product?.wishlist;

  return (
    <Container>
      <Wrapper>
        <Title>Our Wishlist</Title>
        <Description>
          Here you can check out our new products with fair price on rymo.
        </Description>
        <Products>
          {products?.map((product) => (
            <Card
              onClick={() => navigate(`/shop/:${product.id}`)}
              key={product?.id}
              product={product}
            />
          ))}
        </Products>
      </Wrapper>
    </Container>
  );
};

export default Wishlist;
