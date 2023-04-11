import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <NavLink to={"/"}>
        <button id="notFound-btn"> Go Back</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
