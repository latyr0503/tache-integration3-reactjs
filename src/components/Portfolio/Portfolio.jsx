import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardPorfolio from './CardPorfolio'
import imageTeste from '../../media/pexels-cmonphotography-1809644.jpg'

function Portfolio() {
    return (
        <>
            <Container className='bg-light' id='portfolio'>
                <Row className='mx-auto p-5 '>
                    <h2 className='text-center fs-1 my-5'>
                        Portfolio
                    </h2>
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />
                    <CardPorfolio
                        image={imageTeste}
                        titre={"Volkeno"}
                        texte={"Créer un équivalent de Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+ #React #API #Redux"} />

                </Row>

            </Container>
        </>
    )
}

export default Portfolio