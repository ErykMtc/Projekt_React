import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import './Browse.css';
import { useRef, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';


import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Browse() {

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
    
    const alphabet = ["Wszystkie","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const [post, setPost] = useState(null);
    var [start, setStart] = useState(0);
    var [filter, setFilter] = useState(0);
    function letterFilter(letter){
        setFilter(letter)
        setStart(0)
    }


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

            if (!post) return null;
            if(!filter){
                setFilter("Wszystkie");
            }

            if (filter != "Wszystkie" && post.length > 0){
                var filtered = post.filter((item) => item.name.startsWith(filter))
            }else{
                var filtered = post;
            }


    return(
        <div className='browse-main'>
            
            <Container className='browse-container' fluid>
            
            <h2 className='browse-h2' >Filmy</h2>
            <Row className='browse-alphabet'>
                {alphabet.map((item, iteration) => item == filter  ?
                <Col className='browse-letter'
                 onClick={()=> {letterFilter(item)}}><b>{item}</b></Col> :
                 <Col className='browse-letter'
                 onClick={()=> {letterFilter(item)}}>{item}</Col>
                 )} 

            </Row>


                {filtered.sort((a, b) => (a.name > b.name) ? 1 : -1).slice(start, start + 5 < filtered.length ? start + 5 : filtered.length).map((item, iteration) => 
                <Row key={iteration} className='browse-movie'  onClick={() => {
                    if (Cookies.get('usrFilmoteka')){
                        window.location.href = '/movie/'+item.name;
                    }else{
                        window.alert("Zaloguj się");
                    }
                    
                  }} fluid>
                    <Col className='browse-col' >
                        <Stack  gap={1}> 
                            <div>{item.name}</div>
                            <div>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></div>
                        </Stack>
                    </Col>

                        
                     <Col className='browse-col' sm={10}>
                        {item.description}
                     </Col>
                </Row>
                )}
            <Row className='browse-nav'>
                <Col><button onClick={() => {start - 5 >= 0 ? setStart(start - 5) : setStart(0)}}> ← </button></Col>
                <Col>{Math.ceil(start/5)+1}/{Math.ceil(filtered.length/5)}</Col>
                <Col><button onClick={() => {start + 5 < filtered.length ? setStart(start + 5) : start = setStart(start)}}> → </button></Col>
            </Row>
            </Container>
        </div>
    )
}


