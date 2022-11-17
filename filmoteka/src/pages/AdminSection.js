import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AdminSection() {
    return (
        <div>
            <Container>
                <Row>
                    <h2>Dodaj film do bazy</h2>
                    <Col>
                        <label for="title">Wpisz tytuł:</label>
                        <input type="text" id="title" name="title" />

                        <label for="directorFirstName">Wpisz imie reżysera:</label>
                        <input type="text" id="directorFirstName" name="directorFirstName" />

                        <label for="studioName">Nazwa wytwórni:</label>
                        <input type="text" id="studioName" name="studioName" />
                    </Col>
                    <Col>
                        <label for="year">Rok produkcji:</label>
                        <input type="number" id="year" name="year" />

                        <label for="directorLastName">Wpisz nazwisko reżysera:</label>
                        <input type="text" id="directorLastName" name="directorLastName" />

                        
                    </Col>
                    <h2>Zarządzaj użytkownikami</h2>
                    <Col><h1>AAAAA</h1></Col>
                    <Col><h1>AAAAA</h1></Col>
                    <h2>Dodaj ogłoszenie do bazy</h2>
                    <Col><h1>AAAAA</h1></Col>
                    <Col><h1>AAAAA</h1></Col>
                </Row>
            </Container>
        </div>
    )
}