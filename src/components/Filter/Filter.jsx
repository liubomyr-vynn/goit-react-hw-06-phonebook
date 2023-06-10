import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const { value } = event.target;
    dispatch(setFilterValue(value));
  };

  return (
    <div className="section">
      <h2 className="section__title">Contacts</h2>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className="form__input"
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
