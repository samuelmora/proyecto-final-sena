import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselCustom = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                style={{ filter: 'grayscale(100%)' }}
                src="https://images.unsplash.com/photo-1576269077567-8bcd80fe5c76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Guitarras Acusticas</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                style={{ filter: 'grayscale(100%)' }}
                src="https://images.unsplash.com/photo-1583236753467-456b21f4a1ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Amplificadores</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                style={{ filter: 'grayscale(100%)' }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Guitarras Electricas</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default CarouselCustom