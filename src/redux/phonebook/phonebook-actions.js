/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const fetchContactRequest = createAction(
  "phonebook/fetchContactRequest"
);
export const fetchContactSuccess = createAction(
  "phonebook/fetchContactSuccess"
);
export const fetchContactError = createAction("phonebook/fetchContactError");
export const fetchContactsSuccess = createAction(
  "phonebook/fetchContactsSuccess"
);

export const deleteContactRequest = createAction(
  "phonebook/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "phonebook/deleteContactSuccess"
);
export const deleteContactError = createAction("phonebook/deleteContactError");

export const clearError = createAction("phonebook/clearError");

export const changeFilter = createAction("phonebook/change_filter");
