import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Search.css';

export default function Search() {

    const [name, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [actors, setActor] = useState('');
    const [director, setDirector] = useState('');
    const [movie, setMovie] = useState([]);

    const searchClick = async (e) => {
        
        axios.get('/movies/search', {
            params: {
                name, year
            },
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
            setMovie(movie => response.data);
        });
        // window.location.reload();
    }

    if(Cookies.get('usrFilmoteka')){
        const userdata = JSON.parse(Cookies.get('usrFilmoteka'));
    }

    console.log(movie);

    return(
        <div>
            <Container>
                <Row>
                <label for="title">Wpisz tytuł:</label>
                        {/* little magic on change data with the previous state of the json movie and adding a new name */}
                        <input type="text" id="title" name="title"
                            onChange={(e) => setTitle(e.target.value)} value={name || ''}
                            required />

                        <label for="directorFirstName">Wpisz reżysera:</label>
                        <input type="text" id="directorFirstName" name="directorFirstName"
                            onChange={(e) => setDirector(e.target.value)} value={director || ''}
                            required />


                        <label for="studioName">Wpisz aktora:</label>
                        <input type="text" id="studioName" name="studioName"
                            onChange={(e) => setActor(e.target.value)} value={actors || ''}
                            required />


                        <label for="year">Wpisz rok produkcji:</label>
                        <input type="number" id="year" name="year"
                            onChange={(e) => setYear(e.target.value)} value={year || ''}
                            required />

                    <button className='btn btn-primary' onClick={(e) => searchClick()}>Wyślij</button>
                </Row>

                {movie.map = (item, iteration) =>
                <div key={iteration} className='search-movie' onClick={() => {
                    if (Cookies.get('usrFilmoteka')){
                      window.location.href = '/movie/'+item.name;
                  }else{
                      window.alert("Zaloguj się");
                  }
                  }}>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                }
            </Container>
        </div>
    )
}