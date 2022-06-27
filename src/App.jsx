// import './App.css'
import { useContext } from 'react'
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoContext } from './TodoContext/index'
import { Modal } from './components/Modal/Modal'
import { TodoForm } from './components/TodoForm/TodoForm'
 
const App = () => {
  const { searchedTodos,openModal, setOpenModal } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            text={todo.text} 
            completed={todo.completed} 
            key={todo.text} />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal
        >
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export default App
