import React from 'react';
import HeroSlider from "../../components/UI/HeroSlider/HeroSlider";
import Helmet from "../../components/Helmet";

const Home = () => {
    return (
        <Helmet title='Главная'>
            <section className='p-0 hero__slider-section'>
                <HeroSlider />
            </section>
        </Helmet>
    );
};

export default Home;