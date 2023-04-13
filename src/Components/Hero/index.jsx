import React from "react";
import { Container, Span, Title, Text, TopText, Wrapper } from "./style";
import { Button } from "../../Generics/Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <TopText>{t("hero.new_arrivals")}</TopText>
        <Title>
          <Span>{t("hero.best_practise")}</Span> {t("hero.this_year")}
        </Title>
        <Text>{t("hero.shoomotic")}</Text>
        <Button b>{t("hero.shop_now")}</Button>
      </Wrapper>
    </Container>
  );
};

export default Hero;
