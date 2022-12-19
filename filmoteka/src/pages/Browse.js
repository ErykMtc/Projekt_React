import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Browse() {

    const {auth} = useAuth();
    var start = 0;
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
        <div>
            <Container>
                <Col>
                    {/* <div>{this.state.movie}</div> */}
                <h2>Ranking Filmów</h2>
                <hr></hr>

                {/* {post[0].name}  */}

                {post.slice(start, start + 5 < post.length ? start + 5 : post.length).map((item, iteration) => 
                <div key={iteration} className='following-movie'>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                )}
                </Col>
                <Col>
                <p>sdds</p>
                </Col>
            </Container>
        </div>
    )
}