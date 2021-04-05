import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import style from "./UserMenu.module.css";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.contn}>
    <span className={style.text}>Welcome, {name}</span>
    <button onClick={onLogout} className={style.bt}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
