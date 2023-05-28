import React from "react";
import { Container, Span, Title, Text, TopText, Wrapper } from "./style";
import { Button } from "../../../../generics/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <TopText>{t("hero.new_arrivals")}</TopText>
        <Title>
          <Span>{t("hero.best_practise")}</Span> {t("hero.this_year")}
        </Title>
        <Text>{t("hero.shoomotic")}</Text>
        <Button
          b
          onClick={() => (token ? navigate("/shop") : navigate("sign-up"))}
        >
          {t("hero.shop_now")}
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Hero;
