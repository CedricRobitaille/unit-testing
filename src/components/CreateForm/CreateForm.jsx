import { useState } from "react"

const CreateForm = () => {

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} aria-label="create form">
      <input type="text" aria-label="todo name" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

export default CreateForm;