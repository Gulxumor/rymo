import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* bu yerda coponentlar map bolishi kerak. yangi route yozib chiqish kk, toq tag qilib */}
        </Route>
      </Routes>
    </>
  );
};

export default Root;
