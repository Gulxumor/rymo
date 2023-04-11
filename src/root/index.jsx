import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Brands from "../Components/Brands";
import NewArrivals from "../Components/NewArrivals";
import Sale from "../Components/Sale";
import Watches from "../Components/Watches";
import Footer from "../Components/Footer";
import Shoes from "../Components/Shoes";

const Root = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Navbar />}>
          bu yerda coponentlar map bolishi kerak. yangi route yozib chiqish kk, toq tag qilib
        </Route>
      </Routes> */}
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      <Sale />
      <Watches />
      <Shoes />
      <Footer />
    </>
  );
};

export default Root;
