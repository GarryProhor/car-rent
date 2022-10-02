import React from 'react';
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import Helmet from "../../components/Helmet";
import {Col, Container, Row} from "reactstrap";
import FindCarForm from "../../components/UI/FIndCarForm";
import AboutSection from "../../components/UI/AboutSection";
import ServicesList from "../../components/UI/ServicesList";
import CarList from "../../components/UI/CarList";
import BecomeDriverSection from "../../components/UI/BecomeDriverSection";
import Testimonial from "../../components/UI/Testimonial";
import BlogList from "../../components/UI/BlogList";

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
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section__subtitle'>Услуги</h6>
                            <h2 className='section__title'>Популярные сервисы</h2>
                        </Col>
                        <ServicesList />
                    </Row>
                </Container>
            </section>

            <CarList />
            <BecomeDriverSection />

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-4 text-center'>
                            <h6 className='section__subtitle'>Наши клиенты</h6>
                            <h2 className='section__title'>Отзывы</h2>
                        </Col>
                        <Testimonial />
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className='section__subtitle'>Изучите наши блоги</h6>
                            <h2 className='section__title'>Последние блоги</h2>
                        </Col>
                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;