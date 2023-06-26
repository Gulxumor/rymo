import i18next from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/Pages/NotFound";
import useNavigation from "../utils/navbar";
import { en } from "../locale/en/translation";
import { uz } from "../locale/uz/translation";
import { ru } from "../locale/ru/translation";

const Root = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { navLink } = useNavigation();
  // language ni localstorage ga set qilish
  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      window.location.reload();
    }
  }, []);

  //translation
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: localStorage.getItem("lang") || "en",
    fallback: localStorage.getItem("lang") || "en",
  });

  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navLink()?.map(
            ({ id, path, isPrivate, element }) =>
              !isPrivate && <Route key={id} path={path} element={element} />
          )}

          {navLink()?.map(
            ({ id, path, element, isPrivate }) =>
              isPrivate && (
                <Route
                  key={id}
                  path={path}
                  element={token ? element : <Navigate to={"/sign-in"} />}
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
