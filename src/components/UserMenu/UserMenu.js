import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <span>Welcome, {name}</span>
    <button onClick={onLogout}>Logout</button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
