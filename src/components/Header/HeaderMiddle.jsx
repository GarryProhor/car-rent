import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const HeaderMiddle = () => {
    return (
        <div className='header__middle'>
            <Container>
                <Row>
                    <Col lg='4' sm='4' md='3'>
                        <div className='logo'>
                            <h1>
                                <Link to='/home' className='d-flex align-items-center gap-2'>
                                    <i className="ri-car-line"></i>
                                    <span>Аренда автомобиля <br /> Сервис</span>
                                </Link>
                            </h1>
                        </div>
                    </Col>
                    <Col lg='3' md='3' sm='4'>
                        <div className='header__location d-flex align-items-center gap-2'>
                            <span><i className="ri-earth-line"></i></span>
                            <div className='header__location-content'>
                                <h4>Беларусь</h4>
                                <h6>Гомель, Беларусь</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='4'>
                        <div className='header__location d-flex align-items-center gap-2'>
                            <span><i className="ri-time-line"></i></span>
                            <div className='header__location-content'>
                                <h4>Без выходных</h4>
                                <h6>с 10 до 7</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='2' md='3' sm='0' className='text-end'>
                        <button className='header__btn btn'>
                            <Link to='/contact'>
                                <i className="ri-phone-line"></i>Закажите звонок
                            </Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderMiddle;