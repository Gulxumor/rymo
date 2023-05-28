import React from "react";
import { home } from "../../../utils/navbar";

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
