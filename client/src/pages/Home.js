import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
import Cupcakes from '../images/cupcakes.jpg';

const Home = () => {


    return (

        <div className="hero">
            <Container style={{none}}>
            <Row>
            <Col>
                <Image src={Cupcakes} fluid style={{width: 1550}} className="cupcakes" />
            </Col>
            </Row>
            <Row>
            <Col>
                <p>Our Story</p>
            </Col>
            </Row>
            </Container>            
        </div>
    ) 
}

export default Home;