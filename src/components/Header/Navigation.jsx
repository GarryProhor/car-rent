import React from 'react';
import {navLink} from "../../assets/data/navLink";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    const menuRef = React.useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
    return (
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu'>
                {
                    navLink.map(({path, display}) =>
                        <NavLink to={path} key={path} className={navClass => navClass.isActive ? 'nav__active nav__item':'nav__item' }>{display}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Navigation;