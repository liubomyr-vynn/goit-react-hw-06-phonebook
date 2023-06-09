import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', text => {
  return {
    payload: {
      text,
      id: nanoid(),
    },
  };
});

console.log(addContact('Poly'));

export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');
