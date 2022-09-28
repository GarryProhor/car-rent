import React from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import './Footer.css'
import QuickLink from "./QuickLink";

const Footer = () => {

    const year = new Date().getFullYear();

    return (<footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className='logo footer__logo'>
                        <h1>
                            <Link to='/home' className='d-flex align-items-center gap-2'>
                                <i className="ri-car-line"></i>
                                <span>Аренда автомобиля <br/> Сервис</span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
                        quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
                        Delectus et ad illo recusandae temporibus?
                    </p>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <QuickLink />
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <div className='mb-4'>
                        <h5 className='footer__link-title'>Головной офис</h5>
                        <p className="office__info">246050 Советская 29, Гомель, Беларусь</p>
                        <p className="office__info">Телефон: +375296820360</p>

                        <p className="office__info">Email: proxor-007@mail.ru</p>

                        <p className="office__info">Время работы: 10:00 - 19:00</p>
                    </div>
                </Col>
                <Col lg="3" md="4" sm="12">
                    <div className="mb-4">
                        <h5 className="footer__link-title">Новостная рассылка</h5>
                        <p className="section__description">Подпишитесь на нашу рассылку</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Email"/>
                            <span>
                                <i className="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </div>
                </Col>

                <Col lg="12">
                    <div className="footer__bottom">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i className="ri-copyright-line"></i>Авторское право {year}, разработано
                            Гарри Прохором. Все права защищены.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>);
};

export default Footer;