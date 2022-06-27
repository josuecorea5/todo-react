import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

export const TodoCounter = () => {
  const { todosCompleted, totalTodos } = useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>You are completed {todosCompleted} of {totalTodos} ToDos</h2>
  )
}
