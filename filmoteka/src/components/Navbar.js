import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="site-title">
        <Link to="/" className="">
          Filmoteka
        </Link>
      </div>
      
      <ul className="menu">
        <CustomLink to="/">Strona Główna</CustomLink>
        <CustomLink to="/about">Kontakt</CustomLink>
        <CustomLink to="/ranking">Ranking</CustomLink>
        <CustomLink to="/ulubione">Ulubione</CustomLink>
        <CustomLink to="/search">Wyszukaj <FontAwesomeIcon icon={faSearch} /></CustomLink>
        
        {/* Zrobić wyszukiwarke podobną do tej na stronie Cisco */}
      </ul>
      <div className="login-section">
        <Link to="/about" className="login-btn">Zaloguj się</Link>
      </div>
      
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}