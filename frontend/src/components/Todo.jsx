import React from 'react';
import Topbar from './Topbar';
import List from './List';
import '../scss/todo.scss';
import AddModal from './AddModal';
import EditModal from './EditModal';

const Todo = () => {
  return (
    <>
      <div className="todo">
        <div className="wrapper">
          {/* topbar */}
          <Topbar />
          {/* list */}
          <List />
        </div>
      </div>
      <AddModal />
      <EditModal />
    </>
  );
};

export default Todo;
