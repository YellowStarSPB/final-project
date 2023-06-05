import React, { useState } from 'react';
import arrowInput from '../../assets/img/searchPage/arrowInput.svg';
import Input from '../UI/Input/Input';
import styles from './SearchForm.module.scss';

const tonality = ['Любая', 'Позитивная', 'Негативная'];

function SearchForm() {
    const [showTonality, setShowTonality] = useState(false);
    const [currentTonality, setCurrentTonality] = useState('Любая');

    const handleChangeTonality = (item) => {
        setCurrentTonality((prev) => (prev = item));
        setShowTonality(!showTonality);
    };

    return (
        <form className={styles.searchForm}>
            <div className={styles.leftWrapper}>
                <Input
                    styles={styles.innCompany}
                    id={'inn'}
                    type={'text'}
                    label={'ИНН компании'}
                    placeholder={'10 цифр'}
                    required={true}
                />
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
                <Input
                    styles={styles.count}
                    id={'count'}
                    type={'number'}
                    label={'Количество документов в выдаче'}
                    required={true}
                    value={100}
                />
                <div className={styles.calendar}>
                    <div className={styles.calendar_input}>
                        <Input type={'date'} />
                    </div>
                    <div className={styles.calendar_input}>
                        <Input type={'date'} />
                    </div>
                </div>
            </div>

            <div className={styles.rightWrapper}>right</div>
        </form>
    );
}

export default SearchForm;
