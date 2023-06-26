import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="not-found">
      <NavLink to={"/"}>
        <button id="notFound-btn">{t("go_back")}</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
