import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Input, Text, Title, Wrapper } from "../SignIn/style.js";
import { Container } from "./style.js";
import { Button } from "../../../../generics/Button";
import Footer from "../../../Footer";

const SignUp = () => {
  const nameRef = useRef();
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
          username: nameRef.current.value,
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
          <Title>{t("sign_up.register")}</Title>
          <Input
            placeholder={t("sign_up.name_placeholder")}
            ref={nameRef}
            type="text"
          />
          <Input
            placeholder={t("sign_up.email_placeholder")}
            ref={emailRef}
            type="email"
          />
          <Input
            placeholder={t("sign_up.password_placeholder")}
            ref={passwordRef}
            type="password"
          />
          <Button b w type="submit" onClick={onSave}>
            {loading ? `${t("sign_up.loading")}...` : t("sign_up.register")}
          </Button>
          <Text onClick={() => navigate("/sign-in")}>
            {t("sign_up.sign_up")}
          </Text>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
