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

const isContactNew = (state, name) => {
  console.log(state);
  console.log(name);
  if (state.map((c) => c.name.toLowerCase()).includes(name.toLowerCase())) {
    throw new Error("Contact already exist");
  }
  return true;
};

export const addContact = (number, telf) => async (dispatch, getState) => {
  const contact = {
    name: number,
    number: telf,
  };

  dispatch(addContactRequest());

  try {
    if (isContactNew(getState().phonebook.contacts, contact.name)) {
      const response = await axios.post("/contacts", contact);
      dispatch(addContactSuccess(response.data));
    }
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
