import React, { useTransition } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const NotFound = () => {
  const { t } = useTransition();
  return (
    <div className="not-found">
      <NavLink to={"/"}>
        <button id="notFound-btn">{t("go_back")}</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
