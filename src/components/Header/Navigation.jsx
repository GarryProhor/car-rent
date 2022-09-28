import React from 'react';
import {navLink} from "../../assets/data/navLink";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
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