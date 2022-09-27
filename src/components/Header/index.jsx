import React from 'react';
import {Col, Container, Row} from "reactstrap";

const Header = () => {
    return (
        <header className='header'>
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

                       </Col>
                   </Row>
               </Container>
           </div>
        </header>
    );
};

export default Header;