// import React, { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import {
  addContact,
  deleteContact,
  setFilterValue,
} from '../redux/contactsSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storedContacts);

  //   if (storedContacts) {
  //     dispatch(addContact(parsedContacts));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleFilter = event => {
    const { value } = event.target;
    dispatch(setFilterValue(value));
  };

  const addContactHandler = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkNewName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNewName) {
      Report.info(`Info`, `${name} is already in contacts.`, 'Ok');
      return;
    }

    dispatch(addContact(newContact));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="container">
      <ContactForm addContact={addContactHandler} />

      <Filter filterValue={filterValue} handleFilter={handleFilter} />

      <ContactList contacts={contacts} handleDeleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
