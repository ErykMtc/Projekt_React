import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "../context/AuthProvider";
import axios from 'axios';

import useAuth from '../hooks/useAuth';

import "./SignIn.css";

export default function SignIn() {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({ login: user, password: pwd });
        try {
            const response = await axios.post('/login',
            {},
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                    auth: {
                        username: user,
                        password: pwd
                    }
                }
            );

            // console.log(response?.data);

            // const accessToken = response?.data?.accessToken;
            
            const roles = response?.data.role;
            /// console.log(roles)
            setAuth({ user, pwd, roles});
            setUser('');
            setPwd('');

            //throw to another page
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }



    return (
        <div className='main-div'>
            <Container>
                <Row className='content-section'>
                    <Col md={{ span: 4, offset: 4 }} className='content-col'>
                        <h2>Zaloguj się już dziś!</h2>
                        <form className='' onSubmit={handleSubmit}>
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <div className='login-section'>
                                <label htmlFor="login">Login</label>
                                <input className='input'
                                    type="text"
                                    id="login"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required 
                                    name="log"
                                    placeholder="Nazwa Użytkownika" />
                            </div>

                            <div className='login-section'>
                                <label htmlFor="password">Hasło</label>
                                <input className='input'
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    name="pas"
                                    placeholder="Hasło" 
                                    />
                            </div>

                            <div>
                                <button className='auth-button'>Zaloguj się</button>
                            </div>

                        </form>
                        <Link to='/register' className='link'>Nie posiadasz konta?</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}