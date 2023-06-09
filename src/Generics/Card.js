import { Rate } from "antd";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  BtnWrapper,
  CardContainer,
  CardImg,
  CardWrapper,
  Text,
} from "../components/Pages/Home/NewArrivals/style";

const Card = ({ image, title, price, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const  navigate = useNavigation()
  return (
    <CardContainer>
      <CardImg small src={image} alt="arrival" />
      <CardWrapper>
        <Rate allowHalf defaultValue={3} />
        <Text>{title}</Text>
        <Text>${price}.00</Text>
        <BtnWrapper>
          <Button onClick={() => navigate(`/shop/${id}`)}>
            {t("buy_now")}
          </Button>
        </BtnWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
