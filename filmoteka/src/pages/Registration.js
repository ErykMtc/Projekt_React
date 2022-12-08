import { Link, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"

import "./SignIn.css";
import "./Registration.css"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;

// in password must be a big and small letter a to z, numb 0 to 9
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,25}$/;

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$/;
const FNAME_REGEX = /^[a-zA-Z]{2,25}$/;
const LNAME_REGEX = /^[a-zA-Z]{2,25}$/;


export default function Registration() {
    const userRef = useRef();
    const errRef = useRef();

    // set user var from input
    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //set password from input
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // set password correct
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    //set email from input
    const [email, setMail] = useState("");
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    // set first name from input
    const [firstName, setFirstName] = useState("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    // set first name from input
    const [lastName, setLastName] = useState("");
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    // check validation of name
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidMail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidLastName(LNAME_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidFirstName(FNAME_REGEX.test(firstName));
    }, [firstName])

    // check validation of password
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd, email, lastName, firstName]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = LNAME_REGEX.test(lastName);
        const v5 = FNAME_REGEX.test(firstName);
        if (!v1 || !v2 || !v3 || !v4 || !v5) {
            setErrMsg("Niepoprawne Dane");
            return;
        }

        try {
            const response = await axios.post('/register',
                JSON.stringify({ user, pwd, firstName, lastName, email }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))

            // to chnge layout after registration
            setSuccess(true);

            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
            setFirstName('');
            setLastName('');
            setMail('');
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (


        <div className="main-div">
            <Container>
                <Row className="content-section">
                    <Col md={{ span: 4, offset: 4 }} className="content-col">
                        {success ? (
                            <Navigate to="/login" />
                        ) : (
                            <>
                                <h2>Zarejestruj się już dziś!</h2>
                                <form className="" onSubmit={handleSubmit}>
                                    <p
                                        ref={errRef}
                                        className={errMsg ? "errmsg" : "offscreen"}
                                        aria-live="assertive"
                                    >
                                        {errMsg}
                                    </p>
                                    <div className="login-section">
                                        <label htmlFor="login">Login</label>
                                        {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                                        <input
                                            className="input"
                                            type="text"
                                            id="login"
                                            ref={userRef}
                                            autoComplete="off"
                                            pattern="[a-zA-Z][a-zA-Z0-9-_]{3,25}$"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                            placeholder="Nazwa Użytkownika"
                                        />

                                        <p
                                            id="uidnote"
                                            className={
                                                userFocus && user && !validName ? "instructions" : "offscreen"
                                            }
                                        >4 to 24 characters.
                                            <br />
                                            Must begin with a letter.
                                            <br />
                                            Letters, numbers, underscores, hyphens allowed.
                                        </p>

                                    </div>

                                    <div className="login-section">
                                        <label htmlFor="password">Hasło</label>
                                        <input
                                            className="input"
                                            type="password"
                                            id="password"
                                            name="pas"
                                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,25}$"
                                            placeholder="Hasło"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <p
                                            id="pwdnote"
                                            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                                        >
                                            8 to 24 characters.
                                            <br />
                                            Must include uppercase and lowercase letters, a number and a
                                            special character.
                                            <br />
                                            Allowed special characters:{" "}
                                        </p>
                                    </div>

                                    <div className="login-section">
                                        <label htmlFor="sec-password">Powtórz Hasło</label>
                                        <input
                                            className="input"
                                            type="password"
                                            id="sec-password"
                                            name="pas"
                                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,25}$"
                                            placeholder="Hasło"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            value={matchPwd}
                                            required
                                            aria-invalid={validMail ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />
                                        <p
                                            id="confirmnote"
                                            className={
                                                matchFocus && !validMatch ? "instructions" : "offscreen"
                                            }
                                        >
                                            Must match the first password input field.
                                        </p>
                                    </div>

                                    <div className="login-section">
                                        <label htmlFor="email">E-mail:</label>
                                        <input
                                            className="input"
                                            type="email"
                                            id="email"
                                            name="email"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,30}$"
                                            placeholder="E-mail"
                                            onChange={(e) => setMail(e.target.value)}
                                            value={email}
                                            required
                                            aria-invalid={validMail ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMailFocus(true)}
                                            onBlur={() => setMailFocus(false)}
                                        />
                                        <p
                                            id="confirmnote"
                                            className={
                                                mailFocus && !validMail ? "instructions" : "offscreen"
                                            }
                                        >
                                            AAAAAAA
                                        </p>
                                    </div>

                                    <div className="login-section">
                                        <label htmlFor="first-name">Imie:</label>
                                        <input
                                            className="input"
                                            type="text"
                                            id="first-name"
                                            name="first-name"
                                            pattern="[a-zA-Z]{2,25}$"
                                            placeholder="Imie"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            value={firstName}
                                            required
                                            aria-invalid={validFirstName ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setFirstNameFocus(true)}
                                            onBlur={() => setFirstNameFocus(false)}
                                        />
                                        <p
                                            id="confirmnote"
                                            className={
                                                firstNameFocus && !validFirstName ? "instructions" : "offscreen"
                                            }
                                        >
                                            AAAAAAAbbbbbbb
                                        </p>
                                    </div>

                                    <div className="login-section">
                                        <label htmlFor="last-name">Nazwisko:</label>
                                        <input
                                            className="input"
                                            type="text"
                                            id="last-name"
                                            name="last-name"
                                            pattern="[a-zA-Z]{2,25}$"
                                            placeholder="Nazwisko"
                                            onChange={(e) => setLastName(e.target.value)}
                                            value={lastName}
                                            required
                                            aria-invalid={validLastName ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setLastNameFocus(true)}
                                            onBlur={() => setLastNameFocus(false)}
                                        />
                                        <p
                                            id="confirmnote"
                                            className={
                                                lastNameFocus && !validLastName ? "instructions" : "offscreen"
                                            }
                                        >
                                            AAAAAAAbbbbbbbccccc
                                        </p>
                                    </div>

                                    <div>
                                        <button className="auth-button" >Zarejestruj się</button>
                                    </div>

                                </form>
                                <Link to="/login" className="link">
                                    Masz już konto?
                                </Link>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
