import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

import Img1 from "../img/img-1.jpg";
import Img2 from "../img/img-2.jpg";
import Img3 from "../img/img-3.jpg";

export default function CarouselComp(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
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
    )
}