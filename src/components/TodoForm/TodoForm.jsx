import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Write a new Todo</label>
      <textarea 
        cols="30" 
        rows="10"
        onChange={onChange} 
        value={newTodoValue}
        required
        placeholder="Example of a Todo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export {TodoForm}