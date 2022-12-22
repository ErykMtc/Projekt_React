import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import temp from '../img/temp.jpg';
import './Article.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
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
    //const [cdesc, setCdesc] = useState("");
    const [cmark, setCmark] = useState(5);
    const [posted, setPosted] = useState(false);
    const [observed, setObserved] = useState(null);
    const [usercom, setUsercom] = useState([]);
    
    var cdesc = "";
    //var cmark = "";
    const userdata = JSON.parse(Cookies.get('usrFilmoteka'));

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    function deleteComment(comment_id){
        var tempost = post[0];
        tempost.comments = post[0].comments.filter(item => item.commentId != comment_id)
        setPost([tempost])
    }

    function postComment(mov_id, mark, desc){
        if (!posted){
        let comment = {
            commentDescription:desc,
            commentMark:mark,
            commentUser:userdata.id,
            commentDateTime: "2011-10-10T14:48:00" };
            console.log(comment);
        setPosted(true);
        //console.log("sdads");
        //console.log(comment);
        setUsercom(oldArray => [...oldArray, comment])
        axios.post("/movies/comment/" + mov_id, comment, {
            headers: { 'Content-Type': 'application/json' },
                          auth: {
                              username: userdata.user,
                              password: userdata.pwd
                          }
          }).then(
            res=>{console.log(res);
            }
        )
        }
    }

    function addToFavs(mov_id){
          console.log(userdata);
          axios.put("/users/observed/movie?id=" + userdata.id + "&movie_id="+ mov_id + "", {}, {
            headers: { 'Content-Type': 'application/json' },
                          auth: {
                              username: userdata.user,
                              password: userdata.pwd
                          }
          });
          setObserved(true);
    }

    function deleteMovie(mov_id){
        axios.delete("/movies/delete/" + mov_id, {
          headers: { 'Content-Type': 'application/json' },
                        auth: {
                            username: userdata.user,
                            password: userdata.pwd
                        }
        });
        window.location.href = '/';
  }

    useEffect(() => {
        axios.get('/movies/name/'+ window.location.href.substring(window.location.href.lastIndexOf('/') + 1), {
          headers: { 'Content-Type': 'application/json' },
                        auth: {
                            username: userdata.user,
                            password: userdata.pwd
                        }
        }).then((response) => {
          setPost(response.data);
          axios.post('/login',
          {},
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true,
                  auth: {
                      username:  userdata.user,
                      password: userdata.pwd
                  }
              }
          ).then((response2)=> {setObserved(response2.data.observedMovie.includes(response.data[0].id));
              console.log(response2.data.observedMovie);
              console.log(response.data[0].id)});
        });
        //console.log("test");
        //console.log(post[0].id)
        //console.log(observed)

                
        
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
                                        <input type="submit" value={observed ? "Usuń z ulubionych" : "Dodaj do ulubionych"} onClick={() => observed ? setObserved(false) : addToFavs(item.id) } />
                                        </div>
                                    </Col>
                                    <Col lg='7'>
                                    
                                        <p className="title">{item.name}</p>
                                        {userdata.role != "USER" ? <button onClick={() => (deleteMovie(item.id))}>Usuń</button>: "" }
                                        <div className="right-section">
                                            <p className="chart-text">Ocena:</p> <p className="chart">{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></p>
                                            
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">rezyseria</p> <p className="special-text-info">{item.director ? item.director.directorFirstName + " " + item.director.directorLastName : " "} </p>
                                        </div>
                                        <div className="right-section">
                                            <p className="special-text">gatunek</p> <p className="special-text-info">{item.genre ? item.genre.map((item, iteration) => (item.genreName + " ")) : " "}</p>
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
                                            <Form onSubmit={ (e) => {e.preventDefault(); setPosted(true); document.getElementById("butt").innerText="Opublikowano!";
                                        document.getElementById("butt").disabled=true;}}>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Ocena: {cmark}</Form.Label>
                                                    <Form.Control className="com-range" type="range" min='0' max='10' onChange={(e) => setCmark(e.target.value)}/>
                                                    <Form.Label>Komentarz</Form.Label>
                                                    <Form.Control className="com-textarea" as="textarea" rows={3} onChange={(e) => cdesc = e.target.value}/>
                                                </Form.Group>
                                                <button id="butt" class="third-section-btn" onClick={() => postComment(item.id, cmark, cdesc)}> Opublikuj  </button>
                                            </Form>
                                           
                                        </div>
            
                                        <div className="comment-section">
                                        {usercom.map((item, iteration) => <div className="comment-box">
                                                <p className="com-user">Ocena: {item.commentMark}/10</p>
                                                <p className="com-text">{item.commentDescription}</p>
                                        </div>)
                                        }
                                            {item.comments.map((item, iteration) => <div className="comment-box">
                                            {userdata.role != "USER" ? <button onClick={() => (deleteComment(item.commentId))}>Usuń</button>: "" }
                                                <p className="com-user">Ocena: {item.commentMark}/10</p>
                                                <p className="com-text">{item.commentDescription}</p>
                                                
                                        </div>)
                                        }

                                        </div>
            
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
            
                                )}</div>
                )


}


