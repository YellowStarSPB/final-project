import React from 'react';
import Slider from 'react-slick';
import arrowSlider from '../../assets/img/slider/arrowSlider.svg';
import slide1 from '../../assets/img/slider/slide1.svg';
import slide2 from '../../assets/img/slider/slide2.svg';
import slide3 from '../../assets/img/slider/slide3.svg';

import styles from './AboutSection.module.scss';

function ArrowNext({ onClick }) {
    return (
        <img
            onClick={onClick}
            className={styles.arrowNext}
            src={arrowSlider}
            alt="arrow next"
        />
    );
}

function ArrowPrev({ onClick }) {
    return (
        <img
            className={styles.arrowPrev}
            onClick={onClick}
            src={arrowSlider}
            alt="arrow prev"
        />
    );
}

function AboutSection() {
    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <section className={styles.about}>
            <h2>Почему именно мы</h2>
            <Slider {...settings}>
                <div>
                    <img className={styles.imgSlider} src={slide1} alt="" />
                    <p>Высокая и оперативная скорость обработки заявки</p>
                </div>
                <div>
                    <img className={styles.imgSlider} src={slide2} alt="" />
                    <p>
                        Огромная комплексная база данных, обеспечивающая объективный ответ
                        на запрос
                    </p>
                </div>
                <div>
                    <img className={styles.imgSlider} src={slide3} alt="" />
                    <p>
                        Защита конфеденциальных сведений, не подлежащих разглашению по
                        федеральному законодательству
                    </p>
                </div>
                <div>
                    <img className={styles.imgSlider} src={slide1} alt="" />
                    <p>Высокая и оперативная скорость обработки заявки</p>
                </div>
                <div>
                    <img className={styles.imgSlider} src={slide2} alt="" />
                    <p>
                        Огромная комплексная база данных, обеспечивающая объективный ответ
                        на запрос
                    </p>
                </div>
                <div>
                    <img className={styles.imgSlider} src={slide3} alt="" />
                    <p>
                        Защита конфеденциальных сведений, не подлежащих разглашению по
                        федеральному законодательству
                    </p>
                </div>
            </Slider>
        </section>
    );
}

export default AboutSection;
