import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;
const getError = (state) => state.phonebook.error;

const getContacts = (state) => state.phonebook.contacts;

const getFilter = (state) => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelector = {
  getLoading,
  getError,
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelector;
