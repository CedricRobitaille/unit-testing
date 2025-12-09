import { useState } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav"
import Header from './components/Header/Header';

const App = () => {

  const [page, setPage] = useState("home");

  const handleNavigate = (view) => {
    setPage(view);
    console.log(page)
  }

  return (
    <>
      <Nav handleNavigate={handleNavigate} />
      <Header page={page} />
    </>
  )
}

export default App;
