import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeEditModal } from '../stores/modal.js';
import { editData } from '../stores/data.js';
import axios from 'axios';

const EditModal = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { editModal, singleData } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleEditData = async (e) => {
    e.preventDefault();
    const formData = { id: singleData._id, text: textAreaValue };
    let response = await axios.post('/edit', formData);
    response = response.data;
    if (response.type) {
      dispatch(editData(response.message));
      setTextAreaValue('');
      dispatch(closeEditModal());
    }
  };

  useEffect(() => {
    singleData.text && setTextAreaValue(singleData.text);
  }, [singleData]);

  return (
    <div className={editModal ? 'modal active' : 'modal'}>
      <div className="wrapper">
        <div className="topbar">
          <h3 className="mark">Todo app</h3>
          <button
            className="closeBtn"
            onClick={() => dispatch(closeEditModal())}
          >
            X
          </button>
        </div>

        {/*  */}

        <form onSubmit={(e) => handleEditData(e)}>
          <div className="content">
            <div className="area">
              <textarea
                required="required"
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
              ></textarea>
              <span>Update List Item</span>
            </div>
          </div>

          <div className="buttons">
            <button type="button" onClick={() => dispatch(closeEditModal())}>
              Cancel
            </button>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
