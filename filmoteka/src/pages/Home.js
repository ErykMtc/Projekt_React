import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Img1 from "../img/img-1.jpg";
import Img2 from "../img/img-2.jpg";
import Img3 from "../img/img-3.jpg";

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
                <h1>Ostatnio popularne</h1>
                <Row>
                    <Col className="card-element">
                    <img className="card-first-section" src="" alt="First" />
                    <div className="card-middle-section"></div>
                    <div className="card-end-section"></div>
                    </Col>
                    <Col md={{offset: 1 }} className="card-element">aaa</Col>
                    <Col md={{offset: 1 }} className="card-element">aaa</Col>
                </Row>
            </Container>
            <div className="bg-color">
            <Container className="third-section">
                <h1>Newsy</h1>
                <Row className="news-info">
                    <Col className="">img</Col>
                    <Col className="">aaaa</Col>
                </Row>

                <Row className="news-info">
                    <Col className="">aaaa</Col>
                    <Col className="">img</Col>
                </Row>

                <Row className="news-info">
                    <Col className="">img</Col>
                    <Col className="">aaaa</Col>
                </Row>
            </Container>
            </div>
            <Container className="last-section">
                <h1>Najwyżej oceniane</h1>
            </Container>
        </div>
    );
}
