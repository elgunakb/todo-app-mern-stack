import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAddModal } from '../stores/modal.js';
import { addData } from '../stores/data.js';
import axios from 'axios';

const AddModal = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { addModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleAddData = async (e) => {
    e.preventDefault();
    const formData = { text: textAreaValue };
    let response = await axios.post('/add', formData);
    response = response.data;
    if (response.type) {
      dispatch(addData(response.message));
      setTextAreaValue('');
      dispatch(closeAddModal());
    }
  };

  return (
    <div className={addModal ? 'modal active' : 'modal'}>
      <div className="wrapper">
        <div className="topbar">
          <h3 className="mark">Todo app</h3>
          <button
            className="closeBtn"
            onClick={() => dispatch(closeAddModal())}
          >
            X
          </button>
        </div>

        {/*  */}

        <form onSubmit={(e) => handleAddData(e)}>
          <div className="content">
            <div className="area">
              <textarea
                required="required"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
              ></textarea>
              <span>Add New List</span>
            </div>
          </div>

          <div className="buttons">
            <button type="button" onClick={() => dispatch(closeAddModal())}>
              Cancel
            </button>
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
