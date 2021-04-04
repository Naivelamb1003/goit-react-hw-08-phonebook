import React from "react";
import { connect } from "react-redux";
import style from "./Alert.module.css";
import { clearError } from "../../redux/phonebook/phonebook-actions";

function Alert({ message, closeError }) {
  return (
    <div onClick={closeError} className={style.container}>
      <p className={style.text}>{message}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  closeError: () => dispatch(clearError()),
});

export default connect(null, mapDispatchToProps)(Alert);
