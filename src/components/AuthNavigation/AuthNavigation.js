import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const AuthNavigation = () => (
  <div>
    <NavLink to={routes.registration} exact>
      Register
    </NavLink>
    <NavLink to={routes.login} exact>
      Login
    </NavLink>
  </div>
);

export default AuthNavigation;
