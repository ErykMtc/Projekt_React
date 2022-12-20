import Carousel from "react-bootstrap/Carousel";

import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';

import Img1 from "../img/img-1.jpg";
import Img2 from "../img/img-2.jpg";
import Img3 from "../img/img-3.jpg";

export default function CarouselComp(){
    const {auth} = useAuth();
    const [post, setPost] = useState(null);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        axios.get('/movies/news', {
          headers: { 'Content-Type': 'application/json' },
                        auth: {
                            username: auth.user,
                            password: auth.pwd
                        }
        }).then((response) => {
          setPost(response.data);
        });
      }, []);
                if (!post) return null;
    
                return (
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        
                        {post.map((item, iteration) => 
                        <Carousel.Item>
                                <img className="d-block w-100" src={`data:image/jpeg;base64,${item.picture}`} alt="First slide" />
                                <Carousel.Caption>
                                    <div className="info-panel">
                                        <h3 className="info-h3" onClick={() => {
                                                window.location.href = '/movie/'+item.name;
                                              }}>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Carousel.Caption>
                        </Carousel.Item>
            
                                )}
            
                        
                    </Carousel>
                )

}