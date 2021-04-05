import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from "./AuthNavigation.module.css";

const AuthNavigation = () => (
  <div className={style.nav}>
    <NavLink to={routes.registration} exact className={style.link}>
      Register
    </NavLink>
    <NavLink to={routes.login} exact className={style.link}>
      Login
    </NavLink>
  </div>
);

export default AuthNavigation;
