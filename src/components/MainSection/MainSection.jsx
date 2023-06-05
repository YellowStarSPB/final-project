import React from 'react';
import mainImg from '../../assets/img/home/main-img.png';
import Button from '../UI/Button/Button';
import styles from './MainSection.module.scss';

function MainSection() {
    return (
        <section className={styles.main}>
            <div className={styles.infoWrapper}>
                <h1>сервис по поиску публикаций <br /> о компании <br /> по его ИНН</h1>
                <p>
                    Комплексный анализ публикаций, получение данных  в формате PDF
                    на электронную почту.
                </p>
                <Button styles={styles.mainBtn}>Запросить данные</Button>
            </div>
            <div className={styles.imgWrapper}>
                <img src={mainImg} alt="img" />
            </div>
        </section>
    );
}

export default MainSection;
