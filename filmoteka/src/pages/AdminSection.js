import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AdminSection.css';
import { faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminSection() {
    return (
        <div className='admin-main'>
            <Container className='admin-container'>
                <Row>
                    <h2>Dodaj film do bazy</h2>
                    <Col className='admin-first-sec'>
                        <label for="title">Wpisz tytuł:</label>
                        <input type="text" id="title" name="title" />

                        <label for="directorFirstName">Wpisz imie reżysera:</label>
                        <input type="text" id="directorFirstName" name="directorFirstName" />

                        <label for="studioName">Nazwa wytwórni:</label>
                        <input type="text" id="studioName" name="studioName" />
                    </Col>
                    <Col className='admin-first-sec'>
                        <label for="year">Rok produkcji:</label>
                        <input type="number" id="year" name="year" />

                        <label for="directorLastName">Wpisz nazwisko reżysera:</label>
                        <input type="text" id="directorLastName" name="directorLastName" />

                        <label for="movie-img">Wybierz zdjęcie:</label>
                        <input type="file"
                            id="movie-img" name=""
                            accept="image/png, image/jpeg"></input>
                    </Col>
                    <button className='btn btn-primary'>Dodaj</button>
                </Row>

                <Row>
                    <h2>Zarządzaj użytkownikami</h2>
                    <Col>
                        <div className='admin-user'>
                            <span>1.</span>
                            <p>Adam Adamski</p>
                            <select name="" id="">
                                <option value="user">Uzytkownik</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                            <span><FontAwesomeIcon icon={faCheckSquare} size='1x' /></span>
                        </div>

                        <div className='admin-user'>
                            <span>2.</span>
                            <p>Adam Adamski</p>
                            <select name="" id="">
                                <option value="user">Uzytkownik</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                            <span><FontAwesomeIcon icon={faCheckSquare} size='1x' /></span>
                        </div>
                    </Col>
                    <Col><div className='admin-user'>
                        <span>1.</span>
                        <p>Adam Adamski</p>
                        <select name="" id="">
                            <option value="user">Uzytkownik</option>
                            <option value="admin">Admin</option>
                        </select>
                        <span><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                        <span><FontAwesomeIcon icon={faCheckSquare} size='1x' /></span>
                    </div>

                        <div className='admin-user'>
                            <span>2.</span>
                            <p>Adam Adamski</p>
                            <select name="" id="">
                                <option value="user">Uzytkownik</option>
                                <option value="admin">Admin</option>
                            </select>
                            <span><FontAwesomeIcon icon={faTrash} size='1x' /></span>
                            <span><FontAwesomeIcon icon={faCheckSquare} size='1x' /></span>
                        </div></Col>
                </Row>

                <Row>
                    <h2>Dodaj ogłoszenie do bazy</h2>
                    <Col className='admin-last-sec'>
                        <label for="notice-title">Wpisz tytuł:</label>
                        <input type="text" id="notice-title"></input>

                        <label for="notice-desc">Dodaj opis:</label>
                        <textarea id="notice-desc" rows="8" cols="50"></textarea>

                        <label for="notice-img">Wybierz zdjęcie:</label>
                        <input type="file"
                            id="notice-img" name=""
                            accept="image/png, image/jpeg"></input>
                        <button className='btn btn-primary'>Dodaj</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}