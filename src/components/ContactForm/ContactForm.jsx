import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

import { Report } from 'notiflix/build/notiflix-report-aio';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    const checkNewName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNewName) {
      Report.info(`Info`, `${name} is already in contacts.`, 'Ok');
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    event.target.reset();
  };

  return (
    <div className="section">
      <h1 className="section__title">Phonebook</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Z\u0400-\u04FF]+([\-'\s][a-zA-Z\u0400-\u04FF]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
          />
        </div>

        <div className="form__container">
          <label className="form__label" htmlFor="number">
            Number
          </label>
          <input
            className="form__input"
            type="tel"
            name="number"
            pattern="^([+]?[\s0-9]+)?(\(\d{1,3}\)|\d{1,3})([-]?[\s]?[\d]+)+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
          />
        </div>

        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
