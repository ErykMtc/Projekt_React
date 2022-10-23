import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        Filmoteka
      </Link>
      <ul className="menu">
        <CustomLink to="/">Strona Główna</CustomLink>
        <CustomLink to="/about">Kontakt</CustomLink>
        <CustomLink to="/ranking">Ranking</CustomLink>
        <CustomLink to="/search">Wyszukaj</CustomLink>
        
        {/* Zrobić wyszukiwarke podobną do tej na stronie Cisco */}
      </ul>
      <div className="login-section">
        <Link to="/about" className="login-btn">Zaloguj się</Link>
      </div>
      
    </nav>
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