import React, { useEffect, useRef, useState } from 'react';
import arrowInput from '../../assets/img/searchPage/arrowInput.svg';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './SearchForm.module.scss';

const tonality = ['Любая', 'Позитивная', 'Негативная'];
const checkBoxLabel = [
    'Признак максимальной полноты',
    'Упоминания в бизнес-контексте',
    'Главная роль в публикации',
    'Публикации только с риск-факторами',
    'Включать технические новости рынков',
    'Включать анонсы и календари',
    'Включать сводки новостей',
];
const currentDate = new Date().toISOString().slice(0, 10);

function SearchForm() {
    //стейт выпадающего списка
    const [showTonality, setShowTonality] = useState(false);
    //стейт текущей тональности
    const [currentTonality, setCurrentTonality] = useState('Любая');
    //стейт тогла стрелки в инпуте даты
    const [showCalendar, setShowCalendar] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    //рефы на блоки с инпутами дат
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const handleChangeTonality = (item) => {
        setCurrentTonality((prev) => (prev = item));
        setShowTonality(!showTonality);
    };
    /* если кликнули не на инпуте дат, тоглим стрелку */
    useEffect(() => {
        const handleChangeDate = (event) => {
            if (!event.composedPath().includes(inputRef.current)) {
                setShowCalendar(false);
            }
            if (!event.composedPath().includes(inputRef2.current)) {
                setShowCalendar2(false);
            }
        };
        document.body.addEventListener('click', handleChangeDate);
        return () => document.body.removeEventListener('click', handleChangeDate);
    }, []);

    return (
        <form className={styles.searchForm}>
            <div className={styles.leftWrapper}>
                {/* ИНН */}
                <div className={styles.innCompany}>
                    <label htmlFor="inn">
                        ИНН компании<span>*</span>
                    </label>
                    <input type="text" placeholder="10 цифр" id="inn" />
                </div>

                {/* Тональность */}
                <div className={styles.tonalityWrapper}>
                    <p>Тональность</p>
                    <div
                        onClick={() => setShowTonality(!showTonality)}
                        className={styles.tonalityItems}
                    >
                        {currentTonality}
                        <img
                            style={showTonality ? { transform: 'rotate(180deg)' } : {}}
                            src={arrowInput}
                            alt="arrow"
                        />
                    </div>
                    {showTonality && (
                        <div className={styles.tonalityPopup}>
                            <ul>
                                {tonality.map((item) => (
                                    <li
                                        key={item}
                                        onClick={() => handleChangeTonality(item)}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* количество документов */}
                <div className={styles.count}>
                    <label htmlFor="count">
                        Количество документов в выдаче<span>*</span>
                    </label>
                    <input type="number" placeholder="От 1 до 1000" id="count" />
                </div>

                {/* диапазон */}
                <div className={styles.calendarWrapper}>
                    <label>
                        Диапазон поиска<span>*</span>
                    </label>
                    <div className={styles.dateWrapper}>
                        <div ref={inputRef} className={styles.block}>
                            <input
                                onFocus={() => setShowCalendar(!showCalendar)}
                                type="date"
                            />
                            <img
                                className={showCalendar ? styles.rotate : ''}
                                src={arrowInput}
                                alt="arrow"
                            />
                        </div>

                        <div ref={inputRef2} className={styles.block}>
                            <input
                                onFocus={() => setShowCalendar2(!showCalendar2)}
                                type="date"
                            />
                            <img
                                className={showCalendar2 ? styles.rotate : ''}
                                src={arrowInput}
                                alt="arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.rightWrapper}>
                <div className={styles.checkBoxWrapper}>
                    {checkBoxLabel.map((item) => (
                        <div key={item} className={styles.checkBox}>
                            <input className={styles.customCheckbox} type="checkbox" />
                            <label>{item}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.buttonWrapper}>
                    <Button styles={styles.searchBtn}>Поиск</Button>
                    <div>
                        <span>* Обязательные к заполнению поля</span>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
