import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

import Img1 from "../img/img-1.jpg";
import Img2 from "../img/img-2.jpg";
import Img3 from "../img/img-3.jpg";
import icon from "../img/icon.jpg";
import temp from "../img/temp.jpeg"

import "./Home.css";

export default function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="home-section">
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Img1} alt="First slide" />
                        <Carousel.Caption>
                            <div className="info-panel">
                                <h3>Slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Img2} alt="Second slide" />

                        <Carousel.Caption>
                            <div className="info-panel">
                                <h3>Slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Img3} alt="Third slide" />

                        <Carousel.Caption>
                            <div className="info-panel">
                                <h3>Slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className="second-section">
                <h1>Ostatnio wydane</h1>
                <div className="galery">
                    <div className="card-element">
                        <div><img className="card-first-section" src={icon} alt="First" /></div>
                        <div className="card-middle-section">Lorem ipsum dolor sit amet</div>
                        <div className="card-end-section">
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                            <div class="button" id="animation-btn">
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
                            <div class="button" id="animation-btn">
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
                            <div class="button" id="animation-btn">
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
                                    <FontAwesomeIcon icon={faFilm} size = '2x' />
                                </div>
                                <div className="news-info-box-content">
                                    <h3>Shrek shrek fajny jest</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                    <button class="third-section-btn">Czytaj więcej...</button> 
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gx-0 news-info">
                        <Col md="6" className="my-auto">
                        <div className="news-info-box">
                                <div className="news-info-box-icon">
                                    <FontAwesomeIcon icon={faFilm} size = '2x' />
                                </div>
                                <div className="news-info-box-content">
                                    <h3>Shrek shrek fajny jest</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                    <button class="third-section-btn">Czytaj więcej...</button> 
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
                                    <FontAwesomeIcon icon={faFilm} size = '2x' />
                                </div>
                                <div className="news-info-box-content">
                                    <h3>Shrek shrek fajny jest</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at justo eros. Morbi molestie purus sed eros congue gravida. Vestibulum a mattis tortor. Sed tempor luctus est, sed ultrices sapien porta ac. Donec dictum velit vel sapien varius, nec ultricies lacus placerat. Nam sed arcu vel nibh interdum maximus a sit amet velit. Nulla non orci sed nulla gravida porta</p>
                                    <button class="third-section-btn">Czytaj więcej...</button> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="last-section">
                <h1>Najwyżej oceniane</h1>
            </Container>
        </div>
    );
}
