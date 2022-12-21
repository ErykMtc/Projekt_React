import React, { useState, useEffect, Component } from "react";
import './Following.css';
import Container from 'react-bootstrap/Container';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Following() {

    const {auth} = useAuth();

    const [movie, setMovie] = useState([]);
    const [flag, setFlag] = useState(true);
    const userdata = JSON.parse(Cookies.get('usrFilmoteka'));


    useEffect(() => {
        if(flag){
            try{
                setFlag(false);
                setMovie([]);
            axios.post('/login',
            {},
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                    auth: {
                        username: userdata.user,
                        password: userdata.pwd
                    }
                }
            ).then((response) => {
                //setObserved(response.data.observedMovie);
                setFlag(false);
                setMovie([]);
                response.data.observedMovie.forEach(item => axios.get('/movies/id/' + item,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                    auth: {
                        username: userdata.user,
                        password: userdata.pwd
                    }
                }).then((response) => {
                    setMovie(oldArray => [...oldArray, response.data]);
                }, (error) => {
                    console.log(error);
                })    
                );
              }, (error) => {
                console.log(error);
              });
            } catch(e){
                console.log(e);
            }
        }


      }, []);
      //setFlag(false);
            
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

    return(
        <div className='main-following'>
            <Container className='following-container'>
                {/* <div>{this.state.movie}</div> */}
                <h2>Ulubione filmy</h2>
                <hr></hr>

                {movie.map((item, iteration) => 
                <div key={iteration} className='following-movie' onClick={() => {window.location.href = '/movie/'+item.name;}}>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                    )}

                

            </Container>
        </div>
    )
}