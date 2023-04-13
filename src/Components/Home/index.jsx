import React from "react";
import { home } from "../../utils/Navbar";

const Home = () => {
  return (
    <div>
      {home.map(({ id, element }) => (
        <div key={id}>{element}</div>
      ))}
    </div>
  );
};

export default Home;
