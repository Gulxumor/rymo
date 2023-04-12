import React from "react";
import visa from "../../assets/images/logo/visa.jpg";
import logo from "../../assets/images/logo/orange.png";
import { featured, instagram } from "../../utils/footer";
import {
  Bottom,
  Container,
  Div,
  Img,
  Imgs,
  Text,
  Title,
  Top,
  Wrapper,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Div>
            <Img src={logo} alt="logo-orange" />
            <Text>
              Fringilla urna porttitor rhoncus dolor purus luctus venenatis
              lectus magna fringilla diam moecenas ultricies mi eget mauris.
            </Text>
          </Div>
          <Div>
            <Title>Featured</Title>
            {featured.map(
              ({ featured, name, id }) =>
                featured && <Text key={id}>{name}</Text>
            )}
          </Div>
          <Div>
            <Title m>Contact us</Title>
            <Title>address</Title>
            <Text>123 street name, city, us</Text>
            <Title>Phone</Title>
            <Text> +358 45 73968551</Text>
            <Title>email</Title>
            <Text>example@gmail.com</Text>
          </Div>
          <Div>
            <Title m>Instagram</Title>
            <div className="div">
              {instagram.map(({ id, img }) => (
                <Imgs key={id} src={img} className="img" />
              ))}
            </div>
          </Div>
        </Top>
        <Bottom>
          <Img w src={visa} alt="visa" />
          <Text>rymo eCommerce @ 2023. All Rights Reserved</Text>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;