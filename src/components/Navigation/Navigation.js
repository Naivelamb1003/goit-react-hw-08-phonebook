import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import style from "./Navigation.module.css";

const Navigation = () => (
  <nav className={style.nav}>
    <NavLink to={routes.main} className={style.link}>
      Main
    </NavLink>

    <NavLink to={routes.contacts} className={style.link}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
