import { Link, Navigate, useMatch, useResolvedPath,useNavigate, useLocation  } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faRectangleXmark} from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import ProtectedRoutes from "../hooks/ProtectedRoutes";

export default function Navbar() {
  const [visible, setVisible] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const [movie, setMovie] = useState(null);
  var userdata = Cookies.get('usrFilmoteka');
  if(userdata){
    userdata = JSON.parse(userdata);
  }
  const handleClickk = async (e) => {



    console.log("jestem")
    try {
      const res = await axios.get('/movies/search', { params: { name: movie } });
      if(res.data != null){
        const path = "/movie/name/" + res.data[0].name;
        console.log(res.data[0].name);
        navigate(path, { replace: true });
      }
      
    } catch(err){
      console.log("nie bangla");
    }
  }

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
        <CustomLink to="/browse">Filmy</CustomLink>
        <CustomLink to="/ranking">Ranking</CustomLink>
        <CustomLink to="/following">Ulubione</CustomLink>
        <CustomLink to="#" onClick={() => setVisible(!visible)}>Wyszukaj <FontAwesomeIcon icon={faSearch} /></CustomLink>
        
        {/* Zrobić wyszukiwarke podobną do tej na stronie Cisco */}
      </ul>
      <div className="login-section">
        <Link onClick={() => {
         if(userdata){
          Cookies.remove('usrFilmoteka');
          userdata = false;
          window.location.href = '/';
         }else{
          window.location.href = '/login';
          userdata = Cookies.get('usrFilmoteka');
         } 
        }} to={userdata ? "/" : "/login"}  className="login-btn">{ userdata ? userdata.user : "Zaloguj się"}</Link>
        </div> 
 
      
    </div>

    {/* chowajacy sie prostokat przy pomocy hook */}
    <div className={visible ? 'search-container-vis' : 'search-container-hid'}>
      <div className="close-section">
        <span className="close-symbol" onClick={() => setVisible(!visible)}><FontAwesomeIcon icon={faRectangleXmark} size='2x' /></span>
      </div>

        <form className="search-section">
          <input className="search-input" type="text" id="name" name="name"  minLength="1" maxLength="100" placeholder="Wyszukaj"
          onChange={(e) => setMovie(e.target.value)} value={movie || ''}
          required/>
          <span className="input-icon" onClick={(e) => handleClickk()}><FontAwesomeIcon icon={faSearch} size='2xl' /></span>
          {/* <button className="input-icon" ><FontAwesomeIcon icon={faSearch} size='2xl' /></button> */}
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