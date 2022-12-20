import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import './Ranking.css';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Ranking() {

    const {auth} = useAuth();
    
    // const axiosTest = async () => {
    //     try {
    //       const {data:response} = await axios.get('/movies/ranking') //use data destructuring to get data from the promise object
    //       return response
    //     }
          
    //     catch (error) {
    //       console.log(error);
    //     }
    //   }



    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('/movies', {
      headers: { 'Content-Type': 'application/json' },
                    auth: {
                        username: 'test',
                        password: 'test1'
                    }
    }).then((response) => {
      setPost(response.data);
    });
  }, []);
            console.log(auth);
            console.log(post)
            if (!post) return null;

    return(
        <div className='ranking-main'>
            <Container>
                <h2 >Ranking Filmów</h2>

                {post.sort((a, b) => (a.mark > b.mark) ? -1 : 1).map((item, iteration) => 
                <div key={iteration} className='ranking-movie'>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                )}
            </Container>
        </div>
    )
}