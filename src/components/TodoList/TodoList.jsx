

const TodoList = ({todos}) => {

  
  return (
    <form>
      {todos.map((todo, index) => (
        <input key={index} value={todo} onChange={() => {}} aria-label={`todo-${index}`}>
        </input>
      ))}
    </form>
  )
}

export default TodoList