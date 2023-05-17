import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

function CardPorfolio(props) {
    return (
        <>
            <Col lg={4} sm={12}>
                <Card className='border border-0 shadow mb-5 rounded' style={{ width: '20rem' }}>
                    <Card.Img variant="top" className='img-fluid' src={props.image}/>
                    <Card.Body>
                        <Card.Title> {props.titre} </Card.Title>
                        <Card.Text>
                          {props.texte}
                        </Card.Text>
                        <Button variant="outline-info">En Savoir Plus</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CardPorfolio