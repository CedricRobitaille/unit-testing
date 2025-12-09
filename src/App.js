import { useState } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav"
import Header from './components/Header/Header';
import CreateForm from "./components/CreateForm/CreateForm"

const App = () => {

  const [page, setPage] = useState("home");
  const [todos, setTodos] = useState([])

  const handleNavigate = (view) => {
    setPage(view);
  }

  const handleFormSubmit = (todoName, event) => {
    setPage("home")
    setTodos([...todos, todoName])
  }

  return (
    <>
      <Nav handleNavigate={handleNavigate} />
      <Header page={page} />
      {page === "create" && <CreateForm handleFormSubmit={handleFormSubmit} />}
    </>
  )
}

export default App;
