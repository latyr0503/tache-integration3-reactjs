import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Presentation() {
  return (
    <>
        <Container id='presentation'>
            <Row>
                <h2 className='text-center fs-1 mb-5'>
                    Présentation
                </h2>
                <Col lg={6} sm={12} className="p-3">
                    <ul class="list-unstyled fs-3">
                        <li className='my-4'> <span className='bg-info p-2 fw-bold badge text-white'>1</span> Capacité d'apprentissage</li>
                        <li className='my-4'> <span className='bg-info p-2 fw-bold badge text-white'>2</span> Collaboration</li>
                        <li className='my-4'> <span className='bg-info p-2 fw-bold badge text-white'>3</span> Responsabilité</li>
                        <li className='my-4'> <span className='bg-info p-2 fw-bold badge text-white'>4</span> Prise de décision</li>
                        <li className='my-4'> <span className='bg-info p-2 fw-bold badge text-white'>5</span> Gestion du temps</li>
                    </ul>
                </Col>
                <Col lg={6} sm={12} className='p-4'>
                    <h3 className='text-warning fw-bold'>
                        Triforce !
                    </h3>
                    <p>
                        A l'écoute, je suis Force de proposition, j'aime chercher des solutions
                        et ainsi rendre services. Passioné par l'apprentissage et la découverte intellectuelle,
                        j'ai développé une FORCE de travail afin de toujours progresser
                        au quotidien. FORCE tranquille, j'ai toujours su collaborer et pleinement m'intégrer au sein du collectif.

                    </p>
                    <p>
                    Besoin d'un collaborateur flexible et persévérant ?
                        je vous propose mes services par le biais d'une ALTERNANCE. Avec 4 jours
                        dans votre société et 1 jour en formation, le tout modulable comme
                        vous le souhaitez, je pourrais facilement répondre à vos besoin.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Presentation