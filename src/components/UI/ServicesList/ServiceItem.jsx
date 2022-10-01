import React from 'react';
import {Col} from "reactstrap";

const ServiceItem = ({item}) => {
    return (
        <Col lg='4' sm='6' className='mb-3'>
            <div className='service__item'>
                <span className='mb-3 d-inline-block'>
                    <i className={item.icon}/>
                    <h6>{item.title}</h6>
                    <p className='section__description'>{item.desc}</p>
                </span>
            </div>
        </Col>
    );
};

export default ServiceItem;
