import { Component, Suspense, lazy } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Route, Switch } from "react-router";
import routes from "./components/routes";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading..</p>}>
          <Switch>
            <Route exact path={routes.main} component={HomeView} />
            <PublicRoute
              path={routes.registration}
              restricted
              component={RegisterView}
            />
            <PublicRoute path={routes.login} restricted component={LoginView} />
            <PrivateRoute path={routes.contacts} component={ContactsView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.current,
};

export default connect(null, mapDispatchToProps)(App);
