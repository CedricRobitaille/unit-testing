

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  )
}

export default TodoList