import React, {useEffect} from 'react';
import Helmet from "../../components/Helmet";
import {useParams} from "react-router-dom";
import carData from "../../assets/data/carData";
import {Col, Container, Row} from "reactstrap";
import PaymentMethod from "../../components/UI/PaymentMethod";
import BookingForm from "../../components/UI/BookingForm";

const CarDetails = () => {
    const {slug} = useParams();
    const singleCarItem = carData.find(({carName}) => carName === slug);
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [singleCarItem]);
    return (
        <Helmet title={singleCarItem.carName}>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={singleCarItem.imgUrl} alt={singleCarItem.carName} className='w-100'/>
                        </Col>
                        <Col lg="6">
                            <div className="car__info">
                                <h2 className="section__title">{singleCarItem.carName}</h2>

                                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent__price fw-bold fs-4">
                                        {singleCarItem.price}.00 / День
                                    </h6>

                                    <span className=" d-flex align-items-center gap-2">
                                        <span style={{ color: "#f9a826" }}>
                                          <i className="ri-star-s-fill"></i>
                                          <i className="ri-star-s-fill"></i>
                                          <i className="ri-star-s-fill"></i>
                                          <i className="ri-star-s-fill"></i>
                                          <i className="ri-star-s-fill"></i>
                                        </span>
                                        ({singleCarItem.rating} рейтинг)
                                    </span>
                                </div>

                                <p className="section__description">
                                    {singleCarItem.description}
                                </p>

                                <div className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: "4rem" }}>
                                      <span className=" d-flex align-items-center gap-1 section__description">
                                        <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{" "}
                                          {singleCarItem.model}
                                      </span>
                                      <span className=" d-flex align-items-center gap-1 section__description">
                                        <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>{" "}
                                          {singleCarItem.automatic}
                                      </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>{" "}
                                          {singleCarItem.speed}
                                    </span>
                                </div>

                                <div className=" d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                                  <span className=" d-flex align-items-center gap-1 section__description">
                                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                                        {singleCarItem.gps}
                                  </span>
                                  <span className=" d-flex align-items-center gap-1 section__description">
                                    <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i>{" "}
                                        {singleCarItem.seatType}
                                  </span>
                                  <span className=" d-flex align-items-center gap-1 section__description">
                                    <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i>{" "}
                                        {singleCarItem.brand}
                                  </span>
                                </div>
                            </div>
                        </Col>

                        <Col lg="7" className="mt-5">
                            <div className="booking-info mt-5">
                                <h5 className="mb-4 fw-bold ">Информация о бронировании</h5>
                                <BookingForm />
                            </div>
                        </Col>

                        <Col lg="5" className="mt-5">
                            <div className="payment__info mt-5">
                                <h5 className="mb-4 fw-bold ">Платежная информация</h5>
                                <PaymentMethod />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default CarDetails;