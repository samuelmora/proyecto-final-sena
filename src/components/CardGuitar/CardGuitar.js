import React from 'react'
import { Card } from 'react-bootstrap'

const CardGuitar = ({ image, title, price, widthCustom }) => (
    <Card className="d-flex flex-column">
        <Card.Img className="align-self-center" style={{ width: widthCustom || 200, height: 450 }} variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
        </Card.Body>
    </Card>
)

export default CardGuitar