import React from 'react';
import './Contact.css';
import Helmet from "../../components/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import {Col, Container, Form, FormGroup, Input, Row} from "reactstrap";
import {Link} from "react-router-dom";

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },
    {
        url: "#",
        icon: "ri-instagram-line",
    },
    {
        url: "#",
        icon: "ri-linkedin-line",
    },
    {
        url: "#",
        icon: "ri-twitter-line",
    },
];

const Contact = () => {
    return (
        <Helmet title="Контакты">
            <CommonSection title="Контакты" />
            <section>
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h6 className="fw-bold mb-4">Связаться</h6>

                            <Form>
                                <FormGroup className="contact__form">
                                    <Input placeholder="Ваше имя" type="text" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                    <Input placeholder="Email" type="email" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                  <textarea
                                      rows="5"
                                      placeholder="Сообщение"
                                      className="textarea"
                                  ></textarea>
                                </FormGroup>

                                <button className=" contact__btn" type="submit">
                                    Отправить сообщение
                                </button>
                            </Form>
                        </Col>

                        <Col lg="5" md="5">
                            <div className="contact__info">
                                <h6 className="fw-bold">Контакты</h6>
                                <p className="section__description mb-0">
                                    246050 ул.Советская 29, г.Гомель, Беларусь
                                </p>
                                <div className=" d-flex align-items-center gap-2">
                                    <h6 className="fs-6 mb-0">Телефон:</h6>
                                    <p className="section__description mb-0">+375296820360</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Email:</h6>
                                    <p className="section__description mb-0">proxor-007@mail.ru</p>
                                </div>

                                <h6 className="fw-bold mt-4">Подписывайтесь на нас</h6>

                                <div className=" d-flex align-items-center gap-4 mt-3">
                                    {socialLinks.map(({url, icon}) => (
                                        <Link
                                            to={url}
                                            key={icon}
                                            className="social__link-icon"
                                        >
                                            <i className={icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;