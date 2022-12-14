import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AdminSection.css';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function AdminSection() {

    const { auth } = useAuth();

    

    const [movie, setMovie] = useState(
        {
            "name": "",
            "year": "",
            "director": {
                "directorFirstName": "",
                "directorLastName": ""
            },
            "studio": {
                "studioName": ""
            },
            "description": "",
            "actor": [
                {
                    "actorFirstName": "",
                    "actorLastName": ""
                }
            ],
            "picture": ""
        }
    );
    const [user, setUser] = useState(null);
    const [changeUser, setChangeUser] = useState('');
    const [notice, setNotice] = useState(
        {
            "title": "",
            "description": ""
        }
    );
    const [actor, setActor] = useState([]);
    const [actorFirstName, setActorFirstName] = useState('');
    const [actorLastName, setActorLastName] = useState('');
    const [files, setFiles] = useState([]);
    const [base64img, setBase64img] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [movieID, setMovieID] = useState('');





    



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

    const refresh = (e) => {
        axios.get('/users', {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
            setUser(user => response.data);
        });
    }

    const movieClick = async (e) => {

        console.log(movie);
        console.log("jestem")
        axios.post('/movies/add',
            movie
            , {
                headers: { 'Content-Type': 'application/json' },
                auth: {
                    username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                    password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
                }
            }).then((response) => {
            });
    }

    const noticeClick = async (e) => {
        console.log(notice)
        console.log("jestem w notice")
        axios.post('/notices/add', notice, {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
        });
    }

    const userChange = async (e, selectUser) => {
        console.log("zmiana", e.target.value, selectUser.id);
        axios.put('users/role', {}, {
            params: { id: selectUser.id, role: e.target.value },
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
            // console.log(response)
        });
        refresh();
        // window.location.reload(false);
    }


    const deleteUser = async (deleteUser) => {
        axios.delete('users/delete/' + deleteUser.id, {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
        });
        refresh();
    }

    useEffect(() => {
        setMovie(prevState => ({
            ...prevState,
            "actor": actor
        }))
    }, [actor]);

    const addActor = async () => {
        setActor(current => [...current, {
            "actorFirstName": actorFirstName,
            "actorLastName": actorLastName
        }]
            // daje tego state przed re-renderem: https://blog.logrocket.com/why-react-doesnt-update-state-immediately/
            // () => {
            //     setMovie(prevState => ({
            //         ...prevState,
            //         "actor": actor
            //     }))
        );
    }

    const changeMovie = async (e) => {
        // console.log("zmiana", e.target.value, selectUser.id);
        axios.put('movies/update/' + movieID, {name: name, description: description}, {
            params: {  },
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
        });
        // refresh();
    }




    // convert img to base64

    const convert = (e) => {

        setFiles(e.target.value)

        // check max. file size is not exceeded
        // size is in bytes
        // if (files.size[0] > 2000000) {
        //   console.log("File too large");
        //   return;
        // }

        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            console.log(reader.result); //base64encoded string
            const temp = reader.result.substring(23);
            setBase64img(temp);

        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };



    }

    useEffect(() => {
        setMovie(prevState => ({
            ...prevState,
            "picture": base64img
        }))
    }, [base64img]);


    useEffect(() => {
        console.log()
        axios.get('/users', {
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: JSON.parse(Cookies.get('usrFilmoteka')).user,
                password: JSON.parse(Cookies.get('usrFilmoteka')).pwd
            }
        }).then((response) => {
            setUser(response.data);
        });
    },[]);


    console.log(movie);
    if (!user) return null;

    return (
        <div className='admin-main'>
            <Container className='admin-container'>
                <Row>
                    <h1>Dodaj film do bazy</h1>
                    <hr></hr>
                    <form className='admin-first-sec'>

                        <label for="title">Wpisz tytu??:</label>
                        {/* little magic on change data with the previous state of the json movie and adding a new name */}
                        <input type="text" id="title" name="title"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "name": e.target.value
                            }))} value={movie.name || ''}
                            required />

                        <label for="directorFirstName">Wpisz imie re??ysera:</label>
                        <input type="text" id="directorFirstName" name="directorFirstName"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "director": {
                                    "directorFirstName": e.target.value,
                                    "directorLastName": prevState.director.directorLastName
                                }
                            }))} value={movie.director.directorFirstName || ''}
                            required />


                        <label for="directorLastName">Wpisz nazwisko re??ysera:</label>
                        <input type="text" id="directorLastName" name="directorLastName"
                            onChange={(e) => setMovie(prevState => ({
                                ...prevState,
                                "director": {
                                    "directorFirstName": prevState.director.directorFirstName,
                                    "directorLastName": e.target.value
                                }
                            }))} value={movie.director.directorLastName || ''}
                            required />


                        <label for="studioName">Nazwa wytw??rni:</label>
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

                        <label for="movie-img">Wybierz zdj??cie:</label>
                        <input type="file"
                            id="movie-img" name=""
                            accept="image/jpeg" onChange={(e) => { convert(e) }} value={files || ''}></input>


                        <div className='actor-special-div'>
                        <h4>Dodaj aktor??w</h4>
                        <ul className='admin-actor-list'>
                            {actor.map((iteam) =>
                                <li>{iteam.actorFirstName} {iteam.actorLastName}</li>
                            )}
                        </ul>

                        <label>Imie</label>
                            <input id="actor-first-name" value={actorFirstName} type="text" name="first-name"
                                onChange={(e) => setActorFirstName(e.target.value)} ></input>
                        

                        <label>Nazwisko</label>
                            <input id="actor-last-name" value={actorLastName} type="text" name="last-name"
                                onChange={(e) => setActorLastName(e.target.value)}></input>
                        


                        <span onClick={(e) => addActor()} className='btn btn-primary'>Dodaj Aktora</span>
                        </div>
                        
                    </form>
                    <button className='btn btn-primary' onClick={(e) => movieClick()}>Wy??lij</button>
                </Row>


                <h1>Zarz??dzaj u??ytkownikami</h1>
                <hr></hr>
                <Row className='admin-user-section'>
                    {user.map((item, iteration) =>

                        <Col>
                            <div className='admin-user'>
                                <span>{iteration}</span>
                                <p>{item.firstName} {item.lastName}</p>
                                {/* zrobic wybieranie roli i na jej podstawie aktywowac state */}
                                <select name="ffff" id="ddd" onChange={(e) => userChange(e, item)} value={changeUser}>
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
                                <span onClick={(e) => deleteUser(item)}><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                            </div>
                        </Col>

                    )}
                </Row>


                <h1>Dodaj og??oszenie do bazy</h1>
                <hr></hr>
                <Row>
                    
                    <Col className='admin-last-sec'>
                        <label for="notice-title">Wpisz tytu??:</label>
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

                        <label for="notice-img">Wybierz zdj??cie:</label>
                        <input type="file"
                            id="notice-img" name=""
                            accept="image/jpeg" ></input>
                        <button onClick={(e) => noticeClick()} className='btn btn-primary'>Dodaj</button>
                    </Col>
                </Row>


                <h1>Modyfikuj Film</h1>
                <hr></hr>
                <Row>
                    
                    <Col className='admin-last-sec'>
                    <label for="film-id">Wpisz id:</label>
                        <input type="text" id="film-id"
                            onChange={(e) => setMovieID(e.target.value)} value={movieID || ''}
                            required ></input>

                        <label for="film-title">Wpisz tytu??:</label>
                        <input type="text" id="film-title"
                            onChange={(e) => setName(e.target.value)} value={name || ''}
                            required ></input>

                        <label for="filmm-desc">Dodaj opis:</label>
                        <textarea id="filmm-desc" rows="8" cols="50" onChange={(e) => setDescription(e.target.value)}
                          value={description || ''}  required ></textarea>

                        <button onClick={(e) => changeMovie()} className='btn btn-primary'>Zmie??</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}