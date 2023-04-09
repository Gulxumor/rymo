import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Wishlist from "../Components/Wishlist";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* bu yerda coponentlar map bolishi kerak. yangi route yozib chiqish kk, toq tag qilib */}
        </Route>
      </Routes>
      <Footer />
      <Wishlist />
    </>
  );
};

export default Root;
