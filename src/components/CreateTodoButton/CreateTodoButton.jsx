import React from 'react';
import './CreateTodoButton.css';

export const CreateTodoButton = ({setOpenModal}) => {
  const onCreateTodo = () => {
    setOpenModal(prevState => !prevState);
  }
  return (
    <button className='CreateTodoButton' onClick={onCreateTodo}>+</button>
  )
}
