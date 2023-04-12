import React from "react";
import Footer from "../Footer";
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
import logo from "../../assets/images/logo/user.png";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <Container>
        <Wrapper>
          <Inner>
            <User src={logo} />
            <Div>
              <Name>{user?.username}</Name>
              <Info>Software Engineer</Info>
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
