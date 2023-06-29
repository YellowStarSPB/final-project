import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowInput from '../../assets/img/searchPage/arrowInput.svg';
import { getHistograms } from '../../store/search/search-actions';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './SearchForm.module.scss';

const tonalityMock = [
    { title: 'Любая', value: 'any' },
    { title: 'Позитивная', value: 'positive' },
    { title: 'Негативная', value: 'negative' },
];
const checkBoxLabel = [
    { label: 'Признак максимальной полноты', value: 'maxFullness' },
    { label: 'Упоминания в бизнес-контексте', value: 'inBusinessNews' },
    { label: 'Главная роль в публикации', value: 'onlyMainRole' },
    { label: 'Публикации только с риск-факторами', value: 'onlyWithRiskFactors' },
    { label: 'Включать технические новости рынков' },
    { label: 'Включать анонсы и календари' },
    { label: 'Включать сводки новостей' },
];
const currentDate = new Date().toISOString().slice(0, 10);

function SearchForm() {
    const [formData, setFormData] = useState({
        inn: '',
        tonality: '',
        countDocs: '',
        dateSearch: { from: currentDate, to: currentDate },
        searchParams: {
            maxFullness: false,
            inBusinessNews: false,
            onlyMainRole: false,
            onlyWithRiskFactors: false,
        },
    });
    //стейт выпадающего списка
    const [showTonality, setShowTonality] = useState(false);
    //стейт текущей тональности
    const [currentTonality, setCurrentTonality] = useState(tonalityMock[0].title);
    //стейт тогла стрелки в инпуте даты
    const [showCalendar, setShowCalendar] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    //рефы на блоки с инпутами дат для тогла стрелок
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    // console.log(formData);
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

    //хэндлер ИНН
    const handleChangeInn = (value) => {
        setFormData((prev) => ({ ...prev, inn: value }));
    };
    //хэндлер тональности
    const handleChangeTonality = (index) => {
        setCurrentTonality((prev) => (prev = tonalityMock[index].title));
        setFormData((prev) => ({ ...prev, tonality: tonalityMock[index].value }));
        setShowTonality(!showTonality);
    };
    //хэндлер количества документов
    const handleChangeCountDocs = (value) => {
        setFormData((prev) => ({ ...prev, countDocs: value }));
    };
    //хэндлер даты
    const handleChangeDateValue = (e) => {
        setFormData((prev) => ({
            ...prev,
            dateSearch: { ...prev.dateSearch, [e.target.name]: e.target.value },
        }));
    };
    //хэндлер чекбоксов
    const handleChangeCheckbox = (e) => {
        setFormData((prev) => ({
            ...prev,
            searchParams: { ...prev.searchParams, [e.target.id]: e.target.checked },
        }));
    };

    return (
        <form className={styles.searchForm}>
            <div className={styles.leftWrapper}>
                {/* ИНН */}
                <div className={styles.innCompany}>
                    <label htmlFor="inn">
                        ИНН компании<span>*</span>
                    </label>
                    <input
                        value={formData.inn}
                        onChange={(e) => handleChangeInn(e.target.value)}
                        type="text"
                        placeholder="10 цифр"
                        id="inn"
                    />
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
                                {tonalityMock.map(({ title }, index) => (
                                    <li
                                        key={title}
                                        onClick={() => handleChangeTonality(index)}
                                    >
                                        {title}
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
                    <input
                        value={formData.countDocs}
                        onChange={(e) => handleChangeCountDocs(e.target.value)}
                        type="number"
                        placeholder="От 1 до 1000"
                        id="count"
                    />
                </div>

                {/* диапазон */}
                <div className={styles.calendarWrapper}>
                    <label>
                        Диапазон поиска<span>*</span>
                    </label>
                    <div className={styles.dateWrapper}>
                        <div ref={inputRef} className={styles.block}>
                            <input
                                value={formData.dateSearch.from}
                                onChange={(e) => handleChangeDateValue(e)}
                                max={new Date().toISOString().slice(0, 10)}
                                onFocus={() => setShowCalendar(!showCalendar)}
                                name="from"
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
                                value={formData.dateSearch.to}
                                onChange={(e) => handleChangeDateValue(e)}
                                max={new Date().toISOString().slice(0, 10)}
                                onFocus={() => setShowCalendar2(!showCalendar2)}
                                name="to"
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
                    {checkBoxLabel.map(({ label, value }) => (
                        <div key={label} className={styles.checkBox}>
                            <input
                                id={value ? value : label}
                                checked={formData.searchParams[value]}
                                onChange={(e) => handleChangeCheckbox(e)}
                                className={styles.customCheckbox}
                                type="checkbox"
                                disabled={value ? false : true}
                                style={!value ? { cursor: 'not-allowed' } : {}}
                            />
                            <label
                                style={!value ? { cursor: 'not-allowed' } : {}}
                                htmlFor={value ? value : label}
                            >
                                {label}
                            </label>
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
