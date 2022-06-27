import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const [openModal, setOpenModal] = useState(false);
  const [todos, saveTodos] = useLocalStorage('TODO_V1',[]);
  const [searchValue, setSearchValue] = useState('');
  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
      const todoTitle = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoTitle.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const filterTodo = todos.filter(todo => todo.text !== text);
    saveTodos(filterTodo);
  }
  return (
    <TodoContext.Provider value={{
      todosCompleted,
      totalTodos,
      searchValue,
      setSearchValue,
      completeTodo,
      deleteTodo,
      searchedTodos,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider}