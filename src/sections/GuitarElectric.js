import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardGuitar from '../components/CardGuitar/CardGuitar'

const GuitarElectric = () => (
    <Container id="guitarelectric" className="d-flex flex-column" style={{ height: '80vh' }}>
        <br />
        <br />
        <br />
        <h3 className="align-self-center">Guitarras electricas</h3>
        <Row className="mt-5">
            <Col>
                <CardGuitar
                    image="https://cdn.webshopapp.com/shops/179375/files/273829819/image.jpg"
                    title="Gretsch white falcon"
                    price="4000 USD" />
            </Col>
            <Col>
                <CardGuitar
                    image="http://static.keymusic.com/products/290492/XL/fender-american-original-60s-jazzmaster-rw-ice-blue-metallic.jpg"
                    title="Fender Jazzmaster 1960s"
                    price="2000 USD" />
            </Col>
        </Row>
    </Container>
)

export default GuitarElectric