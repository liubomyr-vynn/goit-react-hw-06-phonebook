import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id === action.payload);
  },
  [setFilter]: (state, action) => {
    state.status = action.payload;
  },
});
