import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../utils/Navbar";
import "./style.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <NavLink to={routes.home}>
        <button id="notFound-btn"> Go Back</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
