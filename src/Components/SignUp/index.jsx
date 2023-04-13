import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Text, Title, Wrapper } from "./style.js";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          username: nameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
        })
      );
      setLoading(false);
      window.location.reload();
      navigate("/shop");
    }, 2000);
  };

  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Text>{t("sign_up.login")}</Text>
        <div>
          <Title>{t("sign_up.name")}</Title>
          <Input placeholder="Enter your name" ref={nameRef} type="text" />
        </div>
        <div>
          <Title>{t("footer.email")}</Title>
          <Input
            placeholder={t("sign_up.email_placeholder")}
            ref={emailRef}
            type="email"
          />
        </div>
        <div>
          <Title>{t("sign_up.password")}</Title>
          <Input
            placeholder={t("sign_up.password_placeholder")}
            ref={passwordRef}
            type="password"
          />
        </div>
        <div>
          <Button type="submit" onClick={onSave} id="button">
            {loading ? `${t("sign_up.loading")}...` : t("sign_up.login")}
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
