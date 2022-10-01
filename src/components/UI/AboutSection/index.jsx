import React from 'react';
import './AboutSection.css';
import {Col, Container, Row} from "reactstrap";
import aboutImg from '../../../assets/all-images/cars-img/bmw-offer.png';

const AboutSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='about__section-content'>
                            <h4 className='section__subtitle'>О нас</h4>
                            <h2 className='section__title'>Добро пожаловать в сервис по аренде автомобилей</h2>
                            <p className='section__description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
                                quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
                                Delectus et ad illo recusandae temporibus?
                            </p>
                            <div className='about__section-item d-flex align-items-center'>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className='about__section-item d-flex align-items-center'>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet
                                </p>
                                <p className='section__description d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-line"></i>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='about__img'>
                            <img src={aboutImg} alt='bmw' className='w-100'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
