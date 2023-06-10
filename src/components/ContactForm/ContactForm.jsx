import React from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

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
