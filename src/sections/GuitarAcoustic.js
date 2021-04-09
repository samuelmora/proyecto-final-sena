import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardGuitar from '../components/CardGuitar/CardGuitar'

const GuitarAcoustic = () => (
    <Container id="guitaracoustic" className="d-flex flex-column" style={{ height: '80vh' }}>
        <br />
        <br />
        <br />
        <h3 className="align-self-center">Guitarras acusticas</h3>
        <Row className="mt-5">
            <Col>
                <CardGuitar
                    widthCustom={400}
                    image="https://sc1.musik-produktiv.com/pic-010112862xl/gibson-hummingbird-vintage-10112862.jpg"
                    title="Gibson hummingbird"
                    price="2000 USD" />
            </Col>
            <Col>
                <CardGuitar
                    widthCustom={310}
                    image="https://www.swingcitymusic.com/wp-content/uploads/2020/06/Martin-LX-Ed-Sheeran-Divide.jpg"
                    title="Little Martin"
                    price="700 USD" />
            </Col>
        </Row>
    </Container>
)

export default GuitarAcoustic