import React from 'react';
import Helmet from "../../components/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import CarItem from "../../components/UI/CarList/CarItem";
import carData from "../../assets/data/carData";
import {Col, Container, Row} from "reactstrap";

const CarListing = () => {
    return (<Helmet title='Автомобили'>
            <CommonSection title='Автомобили'/>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                  <i className="ri-sort-asc"></i> Сортировать по
                                </span>
                                <select>
                                    <option>Выбирать</option>
                                    <option value="low">По вызрастанию</option>
                                    <option value="high">По убыванию</option>
                                </select>
                            </div>
                        </Col>

                        {carData.map((item) => (<CarItem item={item} key={item.id}/>))}
                    </Row>
                </Container>
            </section>
        </Helmet>);
};

export default CarListing;