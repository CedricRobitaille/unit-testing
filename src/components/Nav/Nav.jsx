const pages = ["home","create"]

const Nav = ({ handleNavigate }) => {

  return (
    <nav>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <button onClick={() => { handleNavigate(page) }}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav