import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import temp from '../img/temp.jpg';
import './Article.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

export default function Article() {
    return (
        <div className="article-main">
            <div className="article-top-bg">
                <Container>
                    <Row>
                        <Col className="article-top" lg='5'>
                            <img className="article-img" src={temp} alt="First" />
                            <div className="article-img-subsection">
                            <input type="text" name="name" placeholder="-" /> 
                            <span>/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                            <input type="submit" value="Oceń" />
                            </div>
                        </Col>
                        <Col lg='7'>
                            <p className="title">Shrek potężny</p>
                            <div className="right-section">
                                <p className="chart-text">Ocena:</p> <p className="chart">7/10 <FontAwesomeIcon icon={faStar} size='1x' /></p>
                            </div>
                            <div className="right-section">
                                <p className="special-text">rezyseria</p> <p className="special-text-info">Jan Ciurman III, Mateusz Chmielewski-Mytych</p>
                            </div>
                            <div className="right-section">
                                <p className="special-text">gatunek</p> <p className="special-text-info">horror psychologiczny</p>
                            </div>
                            <div className="right-section">
                                <p className="special-text">wytwórnia</p> <p className="special-text-info">Pod Gnuśnym Knurem</p>
                            </div>
                            <div className="right-section">
                                <p className="special-text">rok wydania</p> <p className="special-text-info">2019</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <hr></hr>
                <Row>
                    <Col className="article-second-section">
                        <div class="header-underline">
                            <h2>Opis</h2>
                        </div>
                        <p>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est ornare odio pellentesque cursus. Sed maximus arcu ac tellus bibendum sodales. Praesent hendrerit pharetra posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras accumsan laoreet fermentum. Donec hendrerit faucibus nisl id gravida. Nullam nisi libero, efficitur sed dignissim nec, sollicitudin quis risus. Proin ullamcorper sagittis convallis. Nullam non semper massa. Sed ac semper arcu, in lobortis sapien. Maecenas ac nunc non leo malesuada efficitur non eget diam. Ut ac tellus mattis, luctus arcu in, tristique erat. Sed eget pulvinar massa.

                            Ut et convallis lectus, sed ornare justo. Nullam pretium purus vel malesuada pellentesque. Vestibulum pulvinar nunc magna, et varius ipsum faucibus sed. Praesent tincidunt ullamcorper velit sit amet pharetra. Nulla facilisi. Vestibulum vel nunc ultrices, volutpat libero vitae, commodo odio. Aenean in massa dolor. Nunc placerat arcu libero, et fermentum odio iaculis in. Quisque faucibus, felis eget convallis eleifend, sapien augue vestibulum orci, consequat venenatis urna dui ut elit. Nulla lobortis, enim ut aliquam porta, leo urna gravida nunc, vel dictum lectus ante non ex. Morbi molestie ullamcorper bibendum. Vivamus vel auctor nisi. Curabitur vestibulum mi in iaculis egestas. Quisque mollis ante ipsum, sed. </p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="article-third-section">
                        <div class="header-underline">
                            <h2>Aktorzy</h2>
                        </div>
                        <ul className="article-list">
                            <li>
                                Jan Chmiel
                            </li>
                            <li>
                                Mateusz Ciurak
                            </li>
                            <li>
                                Eryk Niemytysz
                            </li>
                            <li>
                                Jan Krupa
                            </li>
                            <li>
                                Filip Arkadiuszowski
                            </li>
                            <li>
                                Jakub Borszcz
                            </li>
                            <li>
                                Grzegorz Podwójny
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <div className="comment-bg">
                <Container>
                    <Row>
                        <Col className="article-last-section">
                            <div class="header-underline">
                                <h2>Komentarze</h2>
                            </div>
                            <div className="create-comment">
                                <Form>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Nazwa użytkownika</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Komentarz</Form.Label>
                                        <Form.Control className="com-textarea" as="textarea" rows={3} />
                                    </Form.Group>
                                    <button class="third-section-btn">Opublikuj</button>
                                </Form>
                            </div>

                            <div className="comment-section">
                                <div className="comment-box">
                                    <p className="com-user">Daniel Faniel</p>
                                    <p className="com-text">Wylałem picie podczas oglądania ale film spoko 3/10</p>
                                </div>
                                <div className="comment-box">
                                    <p className="com-user">Daniel Faniel</p>
                                    <p className="com-text">hej czym wyczyścić plamy po słodkim napoju?</p>
                                </div>
                                <div className="comment-box">
                                    <p className="com-user">Bogusław Linda</p>
                                    <p className="com-text">Temat wałkowany wielokrotnie. Zamykam.</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}