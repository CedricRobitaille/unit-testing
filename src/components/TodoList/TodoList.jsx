import { useEffect, useState } from "react"


const TodoList = ({ todos, handleTodoChanges }) => {

  const [todoList, setTodoList] = useState(todos)

  useEffect(() => {
    const updateTodoList = () => {
      setTodoList(todos)
    }
    updateTodoList()
  }, [todos])



  const handleInputChange = (index, e) => {
    // map through each element of the original array
    // If the index of said array matches the edited index...
    // Set it to the new value, otherwise, keep as is.
    setTodoList(prev => prev.map((elem, i) => (i === index ? e.target.value : elem)))
  }

  const handleSaveChanges = (e) => {
    e.preventDefault()
    handleTodoChanges(todoList)
  }
  
  return (
    <form onSubmit={handleSaveChanges}>
      {todoList.map((todo, index) => (
        <input key={index} value={todo} onChange={(e) => {handleInputChange(index, e)}} aria-label={`todo-${index}`}></input>
      ))}

      {todoList != todos && <button>Save Changes</button>}
    </form>
  )
}

export default TodoList