import React from 'react'
import { Container } from 'react-bootstrap'

import Carousel from '../components/Carousel/Carousel'

const Home = () => (
    <Container id="home" style={{ height: '85vh' }}>
        <br />
        <br />
        <Carousel />
    </Container>
)

export default Home