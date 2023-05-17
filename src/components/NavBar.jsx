import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="bg-transparent" expand="lg">
            <Container fluid >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto fw-bold my-3">
                        <Nav.Link href="#home" className='text-white active NavLink px-5 fs-5'>Acceuil</Nav.Link>
                        <Nav.Link href="#presentation" className='text-white NavLink px-5 fs-5'>Présentation</Nav.Link>
                        <Nav.Link href="#portfolio" className='text-white NavLink px-5 fs-5'>Portfolio</Nav.Link>
                        <Nav.Link href="#competences" className='text-white NavLink px-5 fs-5'>Compétences</Nav.Link>
                        <Nav.Link href="#experiences" className='text-white NavLink px-5 fs-5'>Expériences</Nav.Link>
                        <Nav.Link href="#contact" className='text-white NavLink px-5 fs-5'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar