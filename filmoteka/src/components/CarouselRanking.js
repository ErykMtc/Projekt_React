import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import icon from "../img/icon.jpg";

export default function CarouselRanking() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="carousel-galery">
                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-galery">
                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-galery">
                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>

                    <div className="carousel-element">
                        <div><img className="last-section-img" src={icon} /></div>
                        <div className="rating">
                            <span><FontAwesomeIcon icon={faStar} size='1x' /> 8.5</span>
                        </div>
                        <div className="carousel-content">
                            <p>Asterix i Obeliks</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}