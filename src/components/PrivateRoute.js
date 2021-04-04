import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import routes from "../components/routes";
import authSelectors from "../redux/auth/auth-selector";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.login} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
