import React from 'react';
import Slider from 'react-slick';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import './HeroSlider.css';
const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }
    return (
        <Slider {...settings} className='hero__slider'>
            <div className='slider__item slider__item-01 mt-0'>
                <Container>
                    <div className='slider__content'>
                        <h6 className='text-light mb-3'>Аренда 300p в день</h6>
                        <h1 className='text-light mb-4'>Забронируйте сейчас и получите скидку 50%</h1>
                        <button className='btn reserve__btn mt-4'>
                            <Link to='/cars'>Забронировать сейчас</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className='slider__item slider__item-02 mt-0'>
                <Container>
                    <div className='slider__content'>
                        <h6 className='text-light mb-3'>Аренда 300p в день</h6>
                        <h1 className='text-light mb-4'>Забронируйте сейчас и получите скидку 50%</h1>
                        <button className='btn reserve__btn mt-4'>
                            <Link to='/cars'>Забронировать сейчас</Link>
                        </button>
                    </div>
                </Container>
            </div>
            <div className='slider__item slider__item-03 mt-0'>
                <Container>
                    <div className='slider__content'>
                        <h6 className='text-light mb-3'>Аренда 300p в день</h6>
                        <h1 className='text-light mb-4'>Забронируйте сейчас и получите скидку 50%</h1>
                        <button className='btn reserve__btn mt-4'>
                            <Link to='/cars'>Забронировать сейчас</Link>
                        </button>
                    </div>
                </Container>
            </div>
        </Slider>
    );
};

export default HeroSlider;