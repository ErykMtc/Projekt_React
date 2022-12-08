import React, { useState, useEffect, Component } from "react";
import './Following.css';
import Container from 'react-bootstrap/Container';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Following extends Component{
    state ={
        movie: []
    };

    async componentDidMount(){
        const url = "/movies";
        const response = await fetch(url, { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'Basic '+btoa('test:test1'), 
                'Content-Type': 'application/json'
            })}, {mode: "cors"});
        const data = await response.json();
        this.setState({movie: data})
        // console.log(data)
    }

    render(){
    return(
        <div className='main-following'>
            <Container className='following-container'>
                {/* <div>{this.state.movie}</div> */}
                <h2>Ulubione filmy</h2>
                <hr></hr>

                {this.state.movie.map((item, iteration) => 
                <div key={iteration} className='following-movie'>
                    <span>{iteration + 1}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                    )}

                {/* {_map(this.state.movie, item => (
                    <div key={item} className='following-movie'>
                    <span>{item.value}</span>
                    <p>{item.name}</p>
                    <span>{item.mark}/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
                
                ))}  */}

                {/* <div className='following-movie'>
                    <span>1.</span>
                    <p>Żywot brajana</p>
                    <span>/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div> */}

            </Container>
        </div>
    )
    }
}