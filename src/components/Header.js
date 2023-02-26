import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="header">The Mercantile</div>
      </Link>
    </nav>
  )
}

export default Header