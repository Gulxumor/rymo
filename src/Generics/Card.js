import React from "react";
import { Rate } from "antd";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import {
  BtnWrapper,
  CardContainer,
  CardImg,
  CardWrapper,
  Text,
} from "../Components/NewArrivals/style";
// import { useNavigation } from "react-router-dom";

const Card = ({ image, title, price }) => {
  const { t } = useTranslation();
  // const  navigate = useNavigation()
  return (
    <CardContainer >
      <CardImg small src={image} alt="arrival" />
      <CardWrapper>
        <Rate allowHalf defaultValue={3} />
        <Text>{title}</Text>
        <Text>${price}.00</Text>
        <BtnWrapper>
          <Button>{t("buy_now")}</Button>
        </BtnWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;