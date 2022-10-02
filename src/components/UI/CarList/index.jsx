import React from 'react';
import {Col, Container, Row} from "reactstrap";
import carData from "../../../assets/data/carData";
import CarItem from "./CarItem";

const CarList = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h6 className='section__subtitle'>Выбрать</h6>
                        <h2 className='section__title'>Горячие предложения</h2>
                    </Col>
                    {
                        carData.slice(0, 6).map((item) => (<CarItem key={item.id} item={item}/>))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default CarList;
