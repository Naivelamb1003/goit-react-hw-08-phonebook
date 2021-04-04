import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.signupSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: (_, __) => null,
});

const error = createReducer(null, {
  [authActions.signupError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.signupSuccess]: (_, __) => true,
  [authActions.loginSuccess]: (_, __) => true,
  [authActions.logoutSuccess]: (_, __) => true,
  [authActions.getCurrentUserSuccess]: (_, __) => true,
  [authActions.signupError]: (_, __) => false,
  [authActions.loginError]: (_, __) => false,
  [authActions.logoutError]: (_, __) => false,
  [authActions.getCurrentUserError]: (_, __) => false,
  [authActions.logoutSuccess]: (_, __) => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
