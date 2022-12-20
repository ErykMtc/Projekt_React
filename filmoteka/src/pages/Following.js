import React, { useState, useEffect, Component } from "react";
import './Following.css';
import Container from 'react-bootstrap/Container';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

export default function Following() {

    const {auth} = useAuth();

    const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get('/users/observed/movie', {
      headers: { 'Content-Type': 'application/json' },
                    auth: {
                        username: auth.user,
                        password: auth.pwd
                    }
    }).then((response) => {
      setMovie(response.data);
    });
  }, []);
            console.log(auth);
        
            if (!movie) return(
                <div className='main-following'>
                    <Container className='following-container'>
                        {/* <div>{this.state.movie}</div> */}
                        <h2>Ulubione filmy</h2>
                        <hr></hr>
        
                        <div> Brak ulubionych</div>
                        
        
                    </Container>
                </div>
            );

    // componentDidMount(){
    //     this.state.auth = useAuth();

    //     const url = "/movies";
    //     const response = await fetch(url, { 
    //         method: 'GET', 
    //         headers: new Headers({
    //             'Authorization': 'Basic '+btoa('test:test1'), 
    //             'Content-Type': 'application/json'
    //         })}, {mode: "cors"});
    //     const data = await response.json();
    //     this.setState({movie: data})
        // console.log(data)
    // };

    return(
        <div className='main-following'>
            <Container className='following-container'>
                {/* <div>{this.state.movie}</div> */}
                <h2>Ulubione filmy</h2>
                <hr></hr>

                {movie.map((item, iteration) => 
                <div key={iteration} className='following-movie'>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                    )}

                

            </Container>
        </div>
    )
}