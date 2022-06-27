import {useContext} from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchTodoChange = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <div className='Container'>
      <input 
        className='TodoSearch' 
        type="text" 
        placeholder='Learning React' 
        value={searchValue}
        onChange={onSearchTodoChange}
      />
    </div>
  )
}
