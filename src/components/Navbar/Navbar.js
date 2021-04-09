import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './styles.css'

const NavbarCustom = () => (
  <Navbar bg="dark" variant="dark" className="navbar">
    <Navbar.Brand href="#home">Guitarras</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#weare">Nosotros</Nav.Link>
      <Nav.Link href="#guitarelectric">Guitarras Electricas</Nav.Link>
      <Nav.Link href="#guitaracoustic">Guitarras Acusticas</Nav.Link>
      <Nav.Link href="#contact">Contacto</Nav.Link>
    </Nav>
  </Navbar>
)

export default NavbarCustom