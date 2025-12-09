

const Header = ({page}) => {

  return (
    <header>
      {page === "create" && "Create a new todo"}
      {page === "home" && "Your todos"}
    </header>
  )
}

export default Header