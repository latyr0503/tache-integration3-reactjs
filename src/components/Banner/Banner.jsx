import React from 'react'
import Menu from '../NavBar'
import './banner.css'
import Monprofil from '../../media/162521705_2909849555894334_8157568047071041862_n.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { BsPhone, BsFillEnvelopeFill,BsPinMapFill, BsFillBuildingsFill } from "react-icons/bs";
function Banner() {
    return (
        <div className='banner'>
            <Menu />
            <Container className='border border-2' id='home' >
                <Row className='my-5 d-flex align-items-center'>
                    <Col lg={7} md={6} sm={12} className=' ps-5' >
                        <h1 className='text-white'>
                            Hello ! je suis <span className='text-info fw-bold '>ABDOULAYE LATYR SENE</span> <br />
                            Développeur junior à Bakeli
                        </h1>
                        
                    
                        <div className='bg-info p-3 rounded-5 fw-bold'>
                            <span className='text-white '> <BsPhone  /> +221 76 124 10 31</span>
                            <span className='text-white px-2'> <BsFillEnvelopeFill/> latyr0503@gmail.com </span>
                            <span className='text-white'> <BsPinMapFill /> Grand Mbao</span>
                            <span className='text-white px-1'> <BsFillBuildingsFill/> Bakeli</span>
                        </div>
                    </Col>
                    <Col lg={5} md={6} sm={12} className='p-5'>
                        <img src={Monprofil} className='rounded-circle img-fluid' clas alt="monProfil" />
                    </Col>
                </Row>
            </Container>
            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#fff" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,106.7C672,117,768,171,864,170.7C960,171,1056,117,1152,85.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Banner