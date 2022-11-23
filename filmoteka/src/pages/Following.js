import './Following.css';
import Container from 'react-bootstrap/Container';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Following(){
    return(
        <div className='main-following'>
            <Container className='following-container'>
                <h2>Ulubione filmy</h2>
                <hr></hr>
                <div className='following-movie'>
                    <span>1.</span>
                    <p>Żywot brajana</p>
                    <span>/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>

                <div className='following-movie'>
                    <span>2.</span>
                    <p>Żywot brajana</p>
                    <span>/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>

                <div className='following-movie'>
                    <span>3.</span>
                    <p>Żywot brajana</p>
                    <span>/10 <FontAwesomeIcon icon={faStar} size='1x' /></span>
                </div>
            </Container>
        </div>
    )
}