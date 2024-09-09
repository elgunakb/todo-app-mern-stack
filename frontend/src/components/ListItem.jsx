import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { deleteData } from '../stores/data';
import { useDispatch } from 'react-redux';
import { openEditModal } from '../stores/modal';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    let formData = {
      id: item._id,
    };
    let response = await axios.post('delete', formData);
    response = response.data;
    if (response.type) {
      dispatch(deleteData(formData));
    }
  };

  return (
    <div className="listItem">
      <section>{item.text}</section>
      <div className="buttons">
        <button
          className="editBtn"
          onClick={() => dispatch(openEditModal(item))}
        >
          <FiEdit />
        </button>
        <button className="deleteBtn" onClick={() => handleDelete()}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
