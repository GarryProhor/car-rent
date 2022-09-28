import React from 'react';
import {Container} from "reactstrap";
import Navigation from "./Navigation";

const MainNavigation = () => {
    return (
        <div className="main__navbar">
            <Container>
                <div className='navigation__wrapper d-flex align-items-center justify-content-between'>
                    <span className='mobile__menu'>
                        <i className="ri-menu-line"></i>
                    </span>

                    <Navigation />

                    <div className='nav__right'>
                        <div className='search__box'>
                            <input type='text' placeholder='Поиск'/>
                            <span>
                                <i className="ri-search-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MainNavigation;