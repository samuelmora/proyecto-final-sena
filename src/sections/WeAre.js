import React from 'react'
import { Container } from 'react-bootstrap'

const WeAre = () => (
    <Container id="weare" className="d-flex flex-column" style={{ height: '70vh' }}>
        <br />
        <br />
        <br />
        <h3 className="align-self-center">Nosotros</h3>
        <img
            className="align-self-center mt-3"
            width="500"
            src="https://images.unsplash.com/photo-1582774275834-a4e23b908c69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D" />
        <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est lorem, suscipit ac neque facilisis, dictum mollis ipsum. Curabitur quis enim pellentesque, cursus felis quis, ornare nisi. Etiam magna orci, finibus in mollis nec, sollicitudin sit amet purus. Nullam lectus purus, viverra at pellentesque vitae, vehicula vitae metus. Suspendisse quis tellus interdum, viverra orci a, fringilla mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at cursus neque.
        </p>
    </Container>
)

export default WeAre