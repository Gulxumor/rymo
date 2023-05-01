import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Input, Text, Title, Wrapper } from "./style";
import { Button } from "../../Generics/Button";
import Footer from "../Footer";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          password: passwordRef.current.value,
          email: emailRef.current.value,
        })
      );
      setLoading(false);
      // window.location.reload();
      navigate("/shop");
    }, 2000);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{t("sign_up.login")}</Title>

          <div>
            <Input
              placeholder={t("sign_up.email_placeholder")}
              ref={emailRef}
              type="email"
            />
          </div>
          <div>
            <Input
              placeholder={t("sign_up.password_placeholder")}
              ref={passwordRef}
              type="password"
            />
          </div>
          <div>
            <Button b w type="submit" onClick={onSave} id="button">
              {loading ? `${t("sign_up.loading")}...` : t("sign_up.login")}
            </Button>
          </div>
          <Text onClick={() => navigate("/sign-up")}>
            {t("sign_in.register")}
          </Text>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
