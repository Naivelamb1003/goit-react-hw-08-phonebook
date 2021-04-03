import axios from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

export const addContact = (namber, telf) => async (dispatch) => {
  const contact = {
    name: namber,
    number: telf,
  };

  dispatch(addContactRequest());

  try {
    const response = await axios.post("/contacts", contact);

    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContacts = (Id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${Id}`);

    dispatch(deleteContactSuccess(Id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const response = await axios.get("/contacts");

    dispatch(fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const contactsOperations = { fetchContacts, addContact, deleteContacts };

export default contactsOperations;
