import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./SignIn.css";

export default function SignIn() {
    return (
        <div className='main-div'>
            <Container>
                <Row className='content-section'>
                    <Col md={{ span: 4, offset: 4 }} className='content-col'>
                        <h2>Zaloguj się już dziś!</h2>
                        <div className=''>
                            <div className='login-section'>
                                <label for="login">Login</label>
                                <input className='input' type="text" id="login" name="log" placeholder="Nazwa Użytkownika" />
                            </div>

                            <div className='login-section'>
                                <label for="password">Hasło</label>
                                <input className='input' type="password" id="password" name="pas" placeholder="Hasło" />
                            </div>

                            <div>
                                <button className='auth-button'>Zaloguj się</button>
                            </div>

                        </div>
                        <Link to='/register' className='link'>Nie posiadasz konta?</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}