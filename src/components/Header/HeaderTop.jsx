import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className='header__top'>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className='header__top-left'>
                            <span>Нужна Помощь?</span>
                            <span className='header__top-help'>
                                    <i className="ri-phone-fill"></i> +375-29-6-820-360
                                </span>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className='header__top-right d-flex align-items-center justify-content-end gap-3'>
                            <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-login-circle-line"></i>Войти</Link>
                            <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-user-line"></i>Регистрация</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderTop;