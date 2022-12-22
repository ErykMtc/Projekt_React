import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

import CarouselComp from "../components/CarouselComp";
import CarouselRanking from "../components/CarouselRanking";

import icon from "../img/icon.jpg";
import temp from "../img/temp.jpeg"

import "./Home.css";

export default class Home extends Component {

    // const [movie, setMovie] = useState("");

    // Axios GET Default
    // const res = axios.get('/movies/news');
    // // const data = res.json();
    // console.log(res)

    // axios.get("/movies/news", {
    //     responseType: "json",
    // }).then(function (response) {
    //     // console.log(response.data);
    //     setMovie(response.data);
    // });

    // console.log("movie");


    // const sendGetRequest = async () => {
    //     try {
    //         const resp = await axios.get('/movies/news');
    //         // console.log(resp.data);
    //         setMovie(resp.data);
    //     } catch (err) {
    //         // Handle Error Here
    //         console.error(err);
    //     }
    // };

    state = {
        movies: [],
        news: []
    }


    componentDidMount() {
        axios.get('/movies/news')
            .then(res => {
                const users = res.data;
                console.log(users);
                this.setState({ movies: users });
            })

            axios.get('/notices/news')
            .then(res => {
                const users = res.data;
                console.log(users);
                this.setState({ news: users });
            })

        // const url = "/movies/news";
        // const response = await fetch(url, {
        //     method: 'GET',
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // }, { mode: "cors" });
        // const data = await response.json();
        // this.setState({ movies: data });
        // console.log(data);
    }


    render() {
        // console.log(movies.)
        return (



            <div className="home-section">
                <div>
                    <CarouselComp />
                </div>
                <Container className="second-section">
                    <h1>Ostatnio wydane</h1>
                    <div className="galery">

                    {this.state.news.map((item, iteration) => {
                            if (iteration < 3)
                                return <div className="card-element">
                                <div><img className="card-first-section" src={icon} alt="First" /></div>
                                <div className="card-middle-section">{item.title}</div>
                                <div className="card-end-section">
                                <span>{item.description}</span>
                                    <div className="button" id="animation-btn">
                                        <div id="circle"></div>
                                        <a className="aaa" href="#">Czytaj więcej...</a>
                                    </div>
                                </div>
                            </div>
                            return <></>
                    }
                    )}
                        
                    </div>
                    {/* <Row>
                    <Col className="card-element">
                    <img className="card-first-section" src={icon} alt="First" />
                    <div className="card-middle-section"></div>
                    <div className="card-end-section"></div>
                    </Col>
                    <Col className="card-element">aaa</Col>
                    <Col className="card-element">aaa</Col>
                </Row> */}
                </Container>
                <div className="bg-color">
                    <Container className="third-section">
                        <h1>Newsy</h1>


                        {this.state.movies.map((item, iteration) => {
                            if (iteration % 2 === 0)
                                return <Row className="gx-0 news-info" >
                                    <Col md="6" className=""><img className="third-section-img" src={`data:image/jpeg;base64,${item.picture}`} alt="First" /></Col>
                                    <Col md="6" className="my-auto">
                                        <div className="news-info-box">
                                            <div className="news-info-box-icon">
                                                <FontAwesomeIcon icon={faFilm} size='2x' />
                                            </div>
                                            <div className="news-info-box-content">
                                                <h3>{item.name}</h3>
                                                <p>{item.description.substring(0, 250)}...</p>
                                                <button className="third-section-btn">Czytaj więcej...</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            return <Row className="gx-0 news-info">
                                <Col md="6" className="my-auto">
                                    <div className="news-info-box">
                                        <div className="news-info-box-icon">
                                            <FontAwesomeIcon icon={faFilm} size='2x' />
                                        </div>
                                        <div className="news-info-box-content">
                                            <h3>{item.name}</h3>
                                            <p>{item.description.substring(0, 300)}...</p>
                                            <button className="third-section-btn">Czytaj więcej...</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6" className=""><img className="third-section-img" src={`data:image/jpeg;base64,${item.picture}`} alt="First" /></Col>
                            </Row>
                        }
                        )}

                    </Container>
                </div>
                <Container className="last-section">
                    <h1>Najwyżej oceniane</h1>
                    <CarouselRanking />

                </Container>
            </div>
        );
    }
}
