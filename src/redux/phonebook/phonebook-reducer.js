import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actions from './phonebook-actions'
import {
  fetchContactsSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  clearError,
} from "./phonebook-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [fetchContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [clearError]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
