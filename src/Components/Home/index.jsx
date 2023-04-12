import React from "react";
import { home } from "../../utils/Navbar";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      {home.map(({ id, element }) => (
        <div key={id}>{element}</div>
      ))}
    </Container>
  );
};

export default Home;
