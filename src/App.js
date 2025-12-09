import { useState } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav"
import Header from './components/Header/Header';
import CreateForm from "./components/CreateForm/CreateForm"
import TodoList from './components/TodoList/TodoList';

const App = () => {

  const [page, setPage] = useState("home");
  const [todos, setTodos] = useState([])

  const handleNavigate = (view) => {
    setPage(view);
  }

  const handleFormSubmit = (todoName) => {
    setPage("home")
    setTodos(prevTodos => [...prevTodos, todoName])
  }

  return (
    <>
      <Nav handleNavigate={handleNavigate} />
      <Header page={page} />
      {page === "create" && <CreateForm handleFormSubmit={handleFormSubmit} />}
      {page === "home" && <TodoList todos={todos}/>}
    </>
  )
}

export default App;
