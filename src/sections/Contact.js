import React from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'

const Contact = () => (
    <Container id="contact" className="d-flex flex-column" style={{ height: '85vh' }}>
        <br />
        <br />
        <br />
        <h3 className="align-self-center">Contactanos</h3>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electronico" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
    </Container>
)

export default Contact