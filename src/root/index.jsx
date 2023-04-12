import i18next from "i18next";
import React from "react";
import { initReactI18next } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NotFound from "../Components/NotFound";
import { navLink, routes } from "../utils/Navbar";
import en from "../locale/en";
import uz from "../locale/uz";
import ru from "../locale/ru";

const Root = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: "en",
    fallback: "en",
  });

  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navLink?.map(
            ({ id, path, isPrivate, element }) =>
              !isPrivate && <Route key={id} path={path} element={element} />
          )}

          {navLink?.map(
            ({ id, path, element, isPrivate }) =>
              isPrivate && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to={routes.signIn} />}
                />
              )
          )}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Root;
