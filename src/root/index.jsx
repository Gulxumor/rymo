import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { navLink } from "../mock/Navbar";

const Root = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navLink.map(
            ({ id, path, isPrivate, element }) =>
              !isPrivate && <Route key={id} path={path} element={element} />
          )}
          {navLink?.map(
            ({ id, to, element, isPrivate }) =>
              isPrivate && (
                <Route
                  key={id} path={to}element={token ? element : <Navigate to={"/sign-up"} />}/>
              )
          )}
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default Root;
