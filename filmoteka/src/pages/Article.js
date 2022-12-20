import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import temp from '../img/temp.jpg';
import './Article.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';

import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import Img1 from "../img/img-1.jpg";
import Img2 from "../img/img-2.jpg";
import Img3 from "../img/img-3.jpg";


export default function Article(){
    const {auth} = useAuth();
    const [post, setPost] = useState(null);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function addToFavs(mov_id){
        /*
        let comment = {commentId:1,
            commentDescription:"desc",
            commentMark:5,
            commentUser:1,
            commentMovieId:"637f2587db6f1107d26b1cf6",
            commentDateTime: "2011-10-10T14:48:00" };
        axios.post("/movies/comment/" + "637f2587db6f1107d26b1cf6", comment, {
            headers: { 'Content-Type': 'application/json' },
                          auth: {
                              username: 'test',
                              password: 'test1'
                          }
          });*/
          console.log(auth.user);
    }

    useEffect(() => {
        axios.get('/movies/name/'+ window.location.href.substring(window.location.href.lastIndexOf('/') + 1), {
          headers: { 'Content-Type': 'application/json' },
                        auth: {
                            username: auth.user,
                            password: auth.pwd
                        }
        }).then((response) => {
          setPost(response.data);
        });
      }, []);
                console.log(auth);
                console.log(post)
                if (!post) return null;

                return (<div>
                    {post.map((item, iteration) => 
                        <div className="article-main">
                        <div className="article-top-bg">
                            <Container>
                                <Row>
                                    <Col className="article-top" lg='5'>
                                        <img className="article-img" src={`data:image/jpeg;base64,${item.picture}`} alt="First" />
                                        <div className="article-img-subsection">
                                        <input type="submit" value="Dodaj do ulubionych" onClick={() => addToFavs(item.id)} />
                                        </div>
                                    </Col>
                                    <Col lg='7'>
                                        <p className="title">{item.name}</p>
                                        <div className="right-section">
                                            <p className="chart-text">Ocena:</p> <p className="chart">{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></p>
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">rezyseria</p> <p className="special-text-info">{item.director ? item.director.directorFirstName + " " + item.director.directorLastName : " "} </p>
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">gatunek</p> <p className="special-text-info">{item.genre ? item.genre.genreName : " "}</p>
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">wytwórnia</p> <p className="special-text-info">{item.studio ? item.studio.studioName : " "}</p>
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">rok wydania</p> <p className="special-text-info">{item.year}</p>
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
                                    <p>{item.description}</p>
            
                                        </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col className="article-third-section">
                                    <div class="header-underline">
                                        <h2>Aktorzy</h2>
                                    </div>
                                    <ul className="article-list">
                                    {item.actors.map((item, iteration) =><li>
                                            {item.actorFirstName + " " + item.actorLastName}
                                        </li>)}
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
                                                    <Form.Label>Komentarz</Form.Label>
                                                    <Form.Control className="com-textarea" as="textarea" rows={3} />
                                                </Form.Group>
                                                <button class="third-section-btn">Opublikuj</button>
                                            </Form>
                                        </div>
            
                                        <div className="comment-section">
                                            {item.comments.map((item, iteration) => <div className="comment-box">
                                                <p className="com-user">{item.commentUser}</p>
                                                <p className="com-text">{item.commentDescription}</p>
                                            </div>)}

                                        </div>
            
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
            
                                )}</div>
                )


}