import './About.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return(
        <div className='about-main'>
            <Container className='about-container' fluid>
                <Row>
                    <Col className='about-Col'>
                        <h1>O nas</h1>
                        <h2>Zespół 22</h2>
                        <Stack className="about-grupa" gap={1}>
                            <div className="about-name">Jan Chmielewski</div>
                            <div className="about-name">Mateusz Ciura</div>
                            <div className="about-name">Jan Krupinski</div>
                            <div className="about-name">Eryk Mytych</div>
                        </Stack>
                    </Col>

                    <Col>
                        <h1>Kontakt</h1>
                        <h2>Wydział Inżynierii Elektrycznej i Komputerowej</h2>
                        <Stack className='about-kontakt' gap={1}>
                            <div className='about-kitem'>ul. Warszawska 24</div>
                            <div className='about-kitem'>31-155 Kraków</div>
                            <div className='about-kitem'>kancelaria@pk.edu.pl</div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}