import { useState } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav"
import Header from './components/Header/Header';
import CreateForm from "./components/CreateForm/CreateForm"

const App = () => {

  const [page, setPage] = useState("home");

  const handleNavigate = (view) => {
    setPage(view);
  }

  return (
    <>
      <Nav handleNavigate={handleNavigate} />
      <Header page={page} />
      {page === "create" && <CreateForm />}
    </>
  )
}

export default App;
