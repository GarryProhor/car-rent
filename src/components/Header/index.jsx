import React from 'react';
import './Header.css';
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import MainNavigation from "./MainNavigation";

const Header = () => {
    return (
        <header className='header'>
           <HeaderTop />
           <HeaderMiddle />
           <MainNavigation />
        </header>
    );
};

export default Header;