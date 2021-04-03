import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => (
  <nav>
    <NavLink to={routes.main}>Main</NavLink>

    <NavLink to={routes.contacts}>Contacts</NavLink>
  </nav>
);

export default Navigation;
