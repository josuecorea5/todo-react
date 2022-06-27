import {useContext} from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css';
import Check from '../../img/done.svg';
import Cancel from '../../img/cancel.svg';

export const TodoItem = ({text,completed}) => {
  const { completeTodo,deleteTodo } = useContext(TodoContext)
  return (
    <li className='TodoItem'>
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={() => completeTodo(text)}
      >
        <img src={Check} alt="" />
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      <span 
        className='Icon Icon-delete'
        onClick={() => deleteTodo(text)}
      >
        <img src={Cancel} alt="" />
      </span>
    </li>
  )
}
