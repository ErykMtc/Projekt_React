import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./SignIn.css";

export default function Registration() {
    return (
        <div className='main-div'>
            <Container>
                <Row className='content-section'>
                    <Col md={{ span: 4, offset: 4 }} className='content-col'>
                        <h2>Zarejestruj się już dziś!</h2>
                        <div className=''>
                            <div className='login-section'>
                                <label for="login">Login</label>
                                <input className='input' type="text" id="login" name="log" placeholder="Nazwa Użytkownika" />
                            </div>

                            <div className='login-section'>
                                <label for="password">Hasło</label>
                                <input className='input' type="password" id="password" name="pas" placeholder="Hasło" />
                            </div>

                            <div className='login-section'>
                                <label for="sec-password">Powtórz Hasło</label>
                                <input className='input' type="password" id="sec-password" name="pas" placeholder="Hasło" />
                            </div>

                            <div>
                                <button className='auth-button'>Zarejestruj się</button>
                            </div>

                        </div>
                        <Link to='/signin' className='link'>Masz już konto?</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}