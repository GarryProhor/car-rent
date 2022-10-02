import React from 'react';
import {Container} from "reactstrap";
import {navLink} from "../../assets/data/navLink";
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    const menuRef = React.useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
    return (
        <div className="main__navbar">
            <Container>
                <div className='navigation__wrapper d-flex align-items-center justify-content-between'>
                    <span className='mobile__menu'>
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>

                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className='menu'>
                            {
                                navLink.map(({path, display}) =>
                                    <NavLink to={path} key={path} className={navClass => navClass.isActive ? 'nav__active nav__item':'nav__item' }>{display}</NavLink>
                                )
                            }
                        </div>
                    </div>

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