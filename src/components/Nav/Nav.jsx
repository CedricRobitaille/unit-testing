const pages = ["home","create"]

const Nav = () => {

  return (
    <nav>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <button onClick={() => {}}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav