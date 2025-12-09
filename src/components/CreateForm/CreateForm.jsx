import { useState } from "react"

const CreateForm = () => {

  const [inputValue, setInputValue] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} aria-label="create form">
      <input type="text" aria-label="todo name" value={inputValue} onChange={() => {}} />
    </form>
  )
}

export default CreateForm;