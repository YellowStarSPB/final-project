import React from 'react';
import cartImg from '../../assets/img/resultCard/1.png';
import styles from './ResultCard.module.scss';

function ResultCard() {
    return (
        <div className={styles.resultCard}>
            <div className={styles.cardInfo}>
                <span>13.09.2021</span>
                <p>Комсомольская правда KP.RU</p>
            </div>
            <h3 className={styles.cardTitle}>
                Скиллфэктори - лучшая онлайн-школа для будущих айтишников
            </h3>
            <span className={styles.cardAttributes}>Технические новости</span>
            <div className={styles.cardImage}>
                <img src={cartImg} alt="docImage" />
            </div>
            <div className={styles.cardText}>
                SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С
                2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
                самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
                Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
                топовых компаниях. Принципы SkillFactory: акцент на практике, забота о
                студентах и ориентир на трудоустройство. 80% обучения — выполнение
                упражнений и реальных проектов. Каждого студента поддерживают менторы, 2
                саппорт-линии и комьюнити курса. А карьерный центр помогает составить
                резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.cardBtn}>
                    <button>Читать в источнике</button>
                </div>
                <div className={styles.countLetters}>
                    <p>2 543 слова</p>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
