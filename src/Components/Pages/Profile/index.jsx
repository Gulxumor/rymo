import React from "react";
import Footer from "../../Footer";
import logo from "../../../assets/images/logo/user.png";
import { useTranslation } from "react-i18next";
import {
  Container,
  Div,
  Info,
  Inner,
  Name,
  Password,
  User,
  Wrapper,
} from "./style";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Wrapper>
          <Inner>
            <User src={logo} />
            <Div>
              <Name>{user?.username}</Name>
              <Info>{t("account.software_engineer")}</Info>
              <Info>{user?.email}</Info>
              <Password>{user?.password}</Password>
            </Div>
          </Inner>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
