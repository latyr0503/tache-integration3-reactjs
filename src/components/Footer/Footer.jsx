import React from 'react'
import './Footer.css'
import { Col, Container,Form, Button, Row } from 'react-bootstrap'
import { BsPencilSquare, BsDiagram2Fill, BsFire, BsFileEarmarkCodeFill } from "react-icons/bs";
import Monprofil from '../../media/162521705_2909849555894334_8157568047071041862_n.jpg'

function Footer() {
    return (
        <>
            <Container id='contact'>
                <Row className='Footer mt-5 text-center text-white p-5'>
                    <Col lg={3} className='border-end border-white border-5'>
                        <BsPencilSquare className='icon' />
                        <p className='fs-5 my-3'>
                            18 projects
                        </p>
                    </Col>
                    <Col lg={3} className='border-end border-white border-5'>
                        <BsDiagram2Fill className='icon' />
                        <p className='fs-5 my-3'>
                            30 algorithmes
                        </p>
                    </Col>
                    <Col lg={3} className='border-end border-white border-5'>
                        <BsFileEarmarkCodeFill className='icon' />
                        <p className='fs-5 my-3'>
                            10 console.log();
                        </p>
                    </Col>
                    <Col lg={3} className=''>
                        <BsFire className='icon' />
                        <p className='fs-5 my-3'>
                            16 border : solid red 1px;
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5' fluid>
                <Row >
                    <h2 className='text-center fs-1 mb-5'>
                        Restons En Contact
                    </h2>
                    <Col className='p-5'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Prénom (s)</Form.Label>
                                <Form.Control type="text" placeholder="Enter votre Prénom" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder=" Entrer votre Nom" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter votre Message" rows={3} />
                            </Form.Group>
                            <Button variant="info" className='text-white fw-bold' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col className='p-5'>
                        <img src={Monprofil} className='rounded-circle w-75 img-fluid' clas alt="monProfil" />
                    </Col>
                    <Col lg={12} className='p-5 finFooter'>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer