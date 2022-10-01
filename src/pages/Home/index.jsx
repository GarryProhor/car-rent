import React from 'react';
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import Helmet from "../../components/Helmet";
import {Col, Container, Row} from "reactstrap";
import FindCarForm from "../../components/UI/FIndCarForm";
import AboutSection from "../../components/UI/AboutSection";

const Home = () => {
    return (
        <Helmet title='Главная'>
            <section className='p-0 hero__slider-section'>
                <HeroSlider />

                <div className='hero__form'>
                    <Container>
                        <Row className='form__row'>
                            <Col lg='4' md='4'>
                                <div className='find__cars-left'>
                                    <h2>Найдите лучший автомобиль здесь</h2>
                                </div>
                            </Col>
                            <Col lg='8' md='8' sm='12'>
                                <FindCarForm />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <AboutSection />
        </Helmet>
    );
};

export default Home;