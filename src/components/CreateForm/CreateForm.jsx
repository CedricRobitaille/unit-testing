

const CreateForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} aria-label="create form">
      <input type="text" />
    </form>
  )
}

export default CreateForm;