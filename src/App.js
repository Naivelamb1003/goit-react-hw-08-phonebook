import { Component } from "react";
import AppBar from "./components/AppBar/AppBar";
import { Route, Switch } from "react-router";
import routes from "./components/routes";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactView/ContactsView";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <Route exact path={routes.main} component={HomeView} />
          <Route path={routes.registration} component={RegisterView} />
          <Route path={routes.login} component={LoginView} />
          <Route path={routes.contacts} component={ContactsView} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.current,
};

export default connect(null, mapDispatchToProps)(App);
