import React from 'react';
import Helmet from "../../components/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import AboutSection from "../../components/UI/AboutSection";
import {Col, Container, Row} from "reactstrap";
import driveImg from '../../assets/all-images/drive.jpg';
import BecomeDriverSection from "../../components/UI/BecomeDriverSection";
import OurMembers from "../../components/UI/OurMembers";
const About = () => {
    return (
        <Helmet title='О нас'>
            <CommonSection title='О нас'/>
            <AboutSection />
            <section className='about__page-section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <div className='about__page-img'>
                                <img src={driveImg} alt='drive' className='w-100 rounded-3'/>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <div className='about__page-content'>
                                <h2 className='section__title'>
                                    Мы стремимся предоставлять решения для безопасной езды
                                </h2>
                                <p className='section__description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
                                    explicabo molestias recusandae repudiandae, dolor, sapiente placeat
                                    ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                                    voluptate odit?
                                </p>
                                <p className='section__description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
                                    explicabo molestias recusandae repudiandae, dolor, sapiente placeat
                                    ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                                    voluptate odit?
                                </p>
                                <div className='d-flex align-items-center gap-3 mt-4'>
                                    <span className='fs-4'><i className="ri-phone-line"></i></span>
                                    <div>
                                        <h6 className="section__subtitle">Нужна помощь?</h6>
                                        <h4>+375296820360</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <BecomeDriverSection />
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">Эксперты</h6>
                            <h2 className="section__title">Наши участники</h2>
                        </Col>
                        <OurMembers />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default About;