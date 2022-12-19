import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AdminSection.css';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function AdminSection() {

    const { auth } = useAuth();

    const [movie, setMovie] = useState(
        {
            "name": "testowy",
            "year": "2019",
            "director": {
                "directorFirstName": "aaa",
                "directorLastName": "aaab"
            },
            "studio": {
                "studioName": "DC Comics"
            },
            "description": "Najszybszy człowiek na ziemi",
            "actors": [
                {
                    "actorFirstName": "abb",
                    "actorLastName": "abb"
                }
            ]
        }
    );
    const [user, setUser] = useState(null);
    const [changeUser, setChangeUser] = useState(null);
    const [notice, setNotice] = useState(
        {
            "title": "Nowe ogłoszenie",
            "description": "Za 3 tygodnie planowana zmiana w wyglądzie serwisu. "
        }
    );






    useEffect(() => {
        axios.get('/users', {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: "matTest",
                password: "test1"
            }
        }).then((response) => {
            setUser(response.data);
        });
    }, []);




    //   useEffect(() => {
    //     axios.put('/users/update', {
    //       headers: { 'Content-Type': 'application/json' },
    //                     auth: {
    //                         username: "matTest",
    //                         password: "test1"
    //                     }
    //     }).then((response) => {
    //     });
    //   }, []);

    const movieClick = async (e) => {

        console.log("jestem")
        axios.post('/movies/add', {
            movie
        }, {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: "matTest",
                password: "test1"
            }
        }).then((response) => {
        });
    }

    const noticeClick = async (e) => {

        console.log("jestem w notice")
        axios.post('/notices/add', {
            notice
        }, {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: "matTest",
                password: "test1"
            }
        }).then((response) => {
        });
    }





    console.log(notice);
    if (!user) return null;

    return (
        <div className='admin-main'>
            <Container className='admin-container'>
                <Row>
                    <h2>Dodaj film do bazy</h2>
                    <form className='admin-first-sec'>

                        <label for="title">Wpisz tytuł:</label>
                        {/* little magic on change data with the previous state of the json movie and adding a new name */}
                        <input type="text" id="title" name="title"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "name": e.target.value
                            }))} value={movie.name || ''}
                            required />

                        <label for="directorFirstName">Wpisz imie reżysera:</label>
                        <input type="text" id="directorFirstName" name="directorFirstName"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "director": {
                                    "directorFirstName": e.target.value,
                                    "directorLastName": prevState.director.directorLastName
                                }
                            }))} value={movie.director.directorFirstName || ''}
                            required />


                        <label for="directorLastName">Wpisz nazwisko reżysera:</label>
                        <input type="text" id="directorLastName" name="directorLastName"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "director": {
                                    "directorFirstName": prevState.director.directorFirstName,
                                    "directorLastName": e.target.value
                                }
                            }))} value={movie.director.directorLastName || ''}
                            required />


                        <label for="studioName">Nazwa wytwórni:</label>
                        <input type="text" id="studioName" name="studioName"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "studio": {
                                    "studioName": e.target.value
                                }
                            }))} value={movie.studio.studioName || ''}
                            required />


                        <label for="year">Rok produkcji:</label>
                        <input type="number" id="year" name="year"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "year": e.target.value
                            }))} value={movie.year || ''}
                            required />


                        <label for="notice-desc-movie">Dodaj opis:</label>
                        <textarea id="notice-desc-movie" rows="8" cols="50"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "description": e.target.value
                            }))} value={movie.description || ''}
                            required />




                        {/* Dodac to do udestepnianych */}
                        <label for="movie-img">Wybierz zdjęcie:</label>
                        <input type="file"
                            id="movie-img" name=""
                            accept="image/png, image/jpeg"></input>

                        <h6>Dodaj aktorów</h6>
                        <ul>
                            <li>aaaa bbbb</li>
                        </ul>


                        <button className='btn btn-primary'>Dodaj Aktora</button>
                    </form>
                    <button className='btn btn-primary' onClick={(e) => movieClick()}>Wyślij</button>
                </Row>

                
                    <h2>Zarządzaj użytkownikami</h2>
                    <Row>
                    {user.map((item, iteration) => 
                            
                            <Col>
                                <div className='admin-user'>
                                    <span>{iteration}</span>
                                    <p>{item.firstName} {item.lastName}</p>
                                    {/* zrobic wybieranie roli i na jej podstawie aktywowac state */}
                                    <select name="" id="">
                                        {item.role === "ADMIN" ?
                                            <>
                                                <option value="ADMIN">Admin</option>
                                                <option value="USER">Uzytkownik</option>
                                            </> : <>
                                                <option value="USER">Uzytkownik</option>
                                                <option value="ADMIN">Admin</option>
                                            </>
                                        }
                                    </select>
                                    <span><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                                    <span><FontAwesomeIcon icon={faCheckSquare} size='1x' /></span>
                                </div>
                            </Col>

                    )}
                </Row>




                    
                

                <Row>
                    <h2>Dodaj ogłoszenie do bazy</h2>
                    <Col className='admin-last-sec'>
                        <label for="notice-title">Wpisz tytuł:</label>
                        <input type="text" id="notice-title" 
                        onChange={(e) => setNotice(prevState => ({
                                ...prevState,
                                "title": e.target.value
                            }))} value={notice.title || ''}
                            required ></input>

                        <label for="notice-desc">Dodaj opis:</label>
                        <textarea id="notice-desc" rows="8" cols="50" onChange={(e) => setNotice(prevState => ({
                                ...prevState,
                                "description": e.target.value
                            }))} value={notice.description || ''}
                            required ></textarea>

                        <label for="notice-img">Wybierz zdjęcie:</label>
                        <input type="file"
                            id="notice-img" name=""
                            accept="image/png, image/jpeg"></input>
                        <button onClick={(e) => noticeClick()} className='btn btn-primary'>Dodaj</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}