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
        movies: []
    }


    componentDidMount() {
        axios.get('/movies/news')
            .then(res => {
                const users = res.data;
                console.log(users);
                this.setState({ users });
            })
    }


    render() {
        return (



            <div className="home-section">
                <div>
                    <CarouselComp />
                </div>
                <Container className="second-section">
                    <h1>Ostatnio wydane</h1>
                    <div className="galery">
                        <div className="card-element">
                            <div><img className="card-first-section" src={icon} alt="First" /></div>
                            <div className="card-middle-section">Lorem ipsum dolor sit amet</div>
                            <div className="card-end-section">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                                <div className="button" id="animation-btn">
                                    <div id="circle"></div>
                                    <a className="aaa" href="#">Czytaj więcej...</a>
                                </div>
                            </div>
                        </div>

                        <div className="card-element">
                            <div><img className="card-first-section" src={icon} alt="First" /></div>
                            <div className="card-middle-section">Lorem ipsum dolor sit amet</div>
                            <div className="card-end-section">
                                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span>
                                <div className="button" id="animation-btn">
                                    <div id="circle"></div>
                                    <a className="aaa" href="#">Czytaj więcej...</a>
                                </div>
                            </div>
                        </div>

                        <div className="card-element">
                            <div><img className="card-first-section" src={icon} alt="First" /></div>
                            <div className="card-middle-section">Lorem ipsum dolor sit amet</div>
                            <div className="card-end-section">
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                                <div className="button" id="animation-btn">
                                    <div id="circle"></div>
                                    <a className="aaa" href="#">Czytaj więcej...</a>
                                </div>
                            </div>
                        </div>
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
                        <Row className="gx-0 news-info" >
                            <Col md="6" className=""><img className="third-section-img" src={temp} alt="First" /></Col>
                            <Col md="6" className="my-auto">
                                <div className="news-info-box">
                                    <div className="news-info-box-icon">
                                        <FontAwesomeIcon icon={faFilm} size='2x' />
                                    </div>
                                    <div className="news-info-box-content">
                                        <h3>Shrek shrek fajny jest</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                        <button className="third-section-btn">Czytaj więcej...</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="gx-0 news-info">
                            <Col md="6" className="my-auto">
                                <div className="news-info-box">
                                    <div className="news-info-box-icon">
                                        <FontAwesomeIcon icon={faFilm} size='2x' />
                                    </div>
                                    <div className="news-info-box-content">
                                        <h3>Shrek shrek fajny jest</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                        <button className="third-section-btn">Czytaj więcej...</button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className=""><img className="third-section-img" src={temp} alt="First" /></Col>
                        </Row>

                        <Row className="gx-0 news-info">
                            <Col md="6" className=""><img className="third-section-img" src={temp} alt="First" /></Col>
                            <Col md="6" className="my-auto">
                                <div className="news-info-box">
                                    <div className="news-info-box-icon">
                                        <FontAwesomeIcon icon={faFilm} size='2x' />
                                    </div>
                                    <div className="news-info-box-content">
                                        <h3>Shrek shrek fajny jest</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                        <button className="third-section-btn">Czytaj więcej...</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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
