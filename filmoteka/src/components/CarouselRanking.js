import Carousel from "react-bootstrap/Carousel";

import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import icon from "../img/icon.jpg";

export default function CarouselRanking() {

    const {auth} = useAuth();
    const [post, setPost] = useState(null);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        axios.get('/movies/ranking', {
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
                return (
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        
                        {post.map((item, iteration) => 
                                    <Carousel.Item>
                                        <div className="carousel-element">
                                        <div ><img className="last-section-img"   src={`data:image/jpeg;base64,${item.picture}`} /></div>
                                            <div className="rating">
                                                <span><FontAwesomeIcon icon={faStar} size='1x' /> {item.mark}</span>

                                            </div>
                                            <div className="carousel-content" >
                                                <CustomLink to={item.name} >{item.name}</CustomLink>
                                            </div>
                                        </div>
                                        </Carousel.Item>
            
                                )}
            
                        
                    </Carousel>
                )


    
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath("/movie/"+to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={"/movie/"+to} {...props}>
          {children}
        </Link>
      </li>
    )
  }