import React from "react";
import visa from "../../assets/images/logo/visa.jpg";
import logo from "../../assets/images/logo/orange.png";
import { instagram } from "../../utils/footer";
import { useTranslation } from "react-i18next";
import useFooter from "../../utils/footer";
import {
  Bottom,
  Container,
  Div,
  Img,
  Imgs,
  InstagramImages,
  Text,
  Title,
  Top,
  Wrapper,
} from "./style";

const Footer = () => {
  const { t } = useTranslation();
  const { featured } = useFooter();

  return (
    <Container>
      <Wrapper>
        <Top>
          <Div>
            <Img src={logo} alt="logo-orange" />
            <Text>{t("footer.fringilla")} </Text>
          </Div>
          <Div>
            <Title>{t("footer.featured")}</Title>
            {featured().map(
              ({ featured, name, id }) =>
                featured && <Text key={id}>{name}</Text>
            )}
          </Div>
          <Div>
            <Title m>{t("footer.contact")}</Title>
            <Title>{t("footer.address")}</Title>
            <Text>{t("footer.street")}</Text>
            <Title>{t("footer.phone")}</Title>
            <Text> +358 45 73968551</Text>
            <Title>{t("footer.email")}</Title>
            <Text>example@gmail.com</Text>
          </Div>
          <Div>
            <Title m>{t("footer.instagram")}</Title>
            <InstagramImages>
              {instagram.map(({ id, img }) => (
                <Imgs key={id} src={img} className="img" />
              ))}
            </InstagramImages>
          </Div>
        </Top>
      </Wrapper>
      <Bottom>
        <Img w src={visa} alt="visa" />
        <Text>{t("footer.rights")}</Text>
      </Bottom>
    </Container>
  );
};

export default Footer;