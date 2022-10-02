import React from 'react';
import './BecomeDriverSection.css';
import {Col, Container, Row} from "reactstrap";
import driverImg from '../../../assets/all-images/toyota-offer-2.png'
const BecomeDriverSection = () => {
    return (
        <section className='become__driver'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='become__driver-img'>
                        <img className='w-100' src={driverImg} alt='toyota'/>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <h2 className='section__title become__driver-title'>
                            Ты хочешь увидеть мир с нами? Поэтому не откладывай на потом!
                        </h2>
                        <button className='btn become__driver-btn mt-4'>
                            Стать водителем
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BecomeDriverSection;
