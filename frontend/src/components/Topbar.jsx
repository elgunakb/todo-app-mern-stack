import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAddModal } from '../stores/modal';
import { searchData } from '../stores/data';

const Topbar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <div className="mark">Todo App</div>
      <div className="searchEngine">
        <input
          type="search"
          placeholder="Search todo.."
          required="required"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            dispatch(searchData(e.target.value));
          }}
        />
      </div>
      <div className="addBtn">
        <button
          onClick={() => {
            dispatch(openAddModal());
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Topbar;
