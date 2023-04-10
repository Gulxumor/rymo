import React from "react";
import { Rate } from "antd";
import { Button } from "./Button";
import {
  BtnWrapper,
  CardContainer,
  CardImg,
  CardWrapper,
  Text,
} from "../NewArrivals/style";

const Card = ({ image, rate, title, price }) => {
  return (
    <CardContainer>
      <CardImg small src={image} alt="arrival" />
      <CardWrapper>
        <Rate allowHalf defaultValue={3} />
        <Text>{title}</Text>
        <Text>${price}.00</Text>
        <BtnWrapper>
          <Button>Buy Now</Button>
        </BtnWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
