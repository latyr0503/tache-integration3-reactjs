import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

function Competences() {
    return (
        <>
            <Container id='competences'>
                <Row>
                    <h2 className='text-center fs-1 my-5'>
                        Mes Compétences
                    </h2>
                    <Col lg={6} sm={12}>
                        <h3 className='bg-light text-info p-3'>Outils</h3>
                        <ul className='my-5'>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'><ProgressBar now={80} variant="info" className='w-50 me-3' striped animated />  Boostrap</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar now={20} variant="info" className='w-50 me-3' striped animated /> Laravel</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar now={50} variant="info" className='w-50 me-3' striped animated /> React</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar now={20} variant="info" className='w-50 me-3' striped animated /> Diango</li>
                        </ul>
                    </Col>
                    <Col lg={6} sm={12}>
                        <h3 className='bg-light text-info p-3'>Languages</h3>
                        <ul className='my-5'>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar variant="info" className='w-50 me-3' striped animated now={80} /> HTML</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar variant="info" now={65} className='w-50 me-3' striped animated /> CSS</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar variant="info" now={70} className='w-50 me-3' striped animated /> JAVASCRIPT</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> <ProgressBar variant="info" now={40} className='w-50 me-3' striped animated /> PHP</li>
                        </ul>
                    </Col>
                    <Col lg={6} sm={12}>
                        <h3 className='bg-light text-info p-3'>Langues</h3>
                        <ul className='my-5'>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Français</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Anglais</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Serrerre</li>
                        </ul>
                    </Col>
                    <Col lg={6} sm={12}>
                        <h3 className='bg-light text-info p-3'>Hobbies</h3>
                        <ul className='my-5'>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Création du blog " Mon Job de dev "</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Le développement web en général</li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> Le sport </li>
                            <li className='d-flex fs-5 fw-bold align-items-center my-3'> La méditation</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid id='experiences'>
                <Row className='bg-light'>
                    <h2 className='text-center fs-1 my-5'>
                        Mes Expériences
                    </h2>
                    <Col lg={11} className='shadow-lg p-4 m-3 bg-white mx-auto'>
                        <h4 className='fw-bold'>
                            Développeur Front-End en alternance (RNCP niveau 6)
                        </h4>
                        <h5 className='text-info'>
                            Janvier 2021
                        </h5>
                        <p>
                            Pédagogie basée sur la réalisatio de projects concrets avec l'accompagnement
                            d'un expert métier chaque semaine. l'alternance peut 
                            débuté à tout moment dans l'année avec 4 jours en entreprise et un jours
                            de formation modulable dans la semaine.
                        </p>
                    </Col>
                    <Col lg={11} className='shadow-lg p-4 m-3 bg-white mx-auto'>
                        <h4 className='fw-bold'>
                            CS50, Harvard
                        </h4>
                        <h5 className='text-info'>
                            Aout - Octobre 2020
                        </h5>
                        <p>
                            Pédagogie basée sur la réalisatio de projects concrets avec l'accompagnement
                            d'un expert métier chaque semaine. l'alternance peut 
                            débuté à tout moment dans l'année avec 4 jours en entreprise et un jours
                            de formation modulable dans la semaine.
                        </p>
                    </Col>
                    <Col lg={11} className='shadow-lg p-4 m-3 bg-white mx-auto'>
                        <h4 className='fw-bold'>
                            Développeur Junior, M2I formation
                        </h4>
                        <h5 className='text-info'>
                            Mars - Juillet 2020
                        </h5>
                        <p>
                            Pédagogie basée sur la réalisatio de projects concrets avec l'accompagnement
                            d'un expert métier chaque semaine. l'alternance peut 
                            débuté à tout moment dans l'année avec 4 jours en entreprise et un jours
                            de formation modulable dans la semaine.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Competences