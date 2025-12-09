

const Header = ({page}) => {

  return (
    <header>
      {page === "create" && "Create a new todo"}
    </header>
  )
}

export default Header