import { useState } from 'react';
import './App.css';

import Nav from "./components/Nav/Nav"

const App = () => {

  const [page, setPage] = useState("home")

  return (
    <>
      <Nav />
    </>
  )
}

export default App;
