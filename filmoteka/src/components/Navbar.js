import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRectangleXmark} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);


  return (
    <>
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
        <CustomLink to="/following">Ulubione</CustomLink>
        <CustomLink to="#" onClick={() => setVisible(!visible)}>Wyszukaj <FontAwesomeIcon icon={faSearch} /></CustomLink>
        
        {/* Zrobić wyszukiwarke podobną do tej na stronie Cisco */}
      </ul>
      <div className="login-section">
        <Link to="/login" className="login-btn">Zaloguj się</Link>
      </div>
      
    </div>

    {/* chowajacy sie prostokat przy pomocy hook */}
    <div className={visible ? 'search-container-vis' : 'search-container-hid'}>
      <div className="close-section">
        <span className="close-symbol" onClick={() => setVisible(!visible)}><FontAwesomeIcon icon={faRectangleXmark} size='2x' /></span>
      </div>

        <form className="search-section">
          <input className="search-input" type="text" id="name" name="name"  minLength="1" maxLength="100" placeholder="Wyszukaj"/>
          <span className="input-icon"><FontAwesomeIcon icon={faSearch} size='2xl' /></span>
        </form>
        
    </div>
    </>
    
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