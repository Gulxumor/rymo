// import { Container, Span, Title, Text, Wrapper } from "../Hero/style";
import { Container, Title, Text, Wrapper } from "./style";
import { Button } from "../../../../generics/Button";
import { useTranslation } from "react-i18next";

const Sale = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Text>{t("sale.title")}</Text>
        <Title>{t("sale.description")}</Title>
        <Button>{t("hero.shop_now")}</Button>
      </Wrapper>
    </Container>
  );
};

export default Sale;
