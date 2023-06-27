import React from 'react';
import titleImg from '../../assets/img/searchResult/titleImg.png';
import Button from '../../components/UI/Button/Button';
import ResultCard from '../../components/ResultCard/ResultCard';
import styles from './SearchResult.module.scss';
import CustomSlider from '../../components/CustomSlider/CustomSlider';

function SearchResult() {
    return (
        <section className={styles.searchResultSection}>
            <div className={styles.titleSection}>
                <div className={styles.textBlock}>
                    <h2>
                        Ищем. Скоро будут
                        <br />
                        результаты
                    </h2>
                    <p>
                        Поиск может занять некоторое время,
                        <br />
                        просим сохранять терпение.
                    </p>
                </div>
                <div className={styles.imgBlock}>
                    <img src={titleImg} alt="titleImg" />
                </div>
            </div>
            <div className={styles.sliderSection}>
                <h2>Общая сводка</h2>
                <p>Найдено 4 221 вариантов</p>
                
                <CustomSlider />
            </div>
            <div className={styles.resultBlock}>
                <h2>Список документов</h2>

                <div className={styles.cardWrapper}>
                    <ResultCard />
                    <ResultCard />
                </div>

                <div className={styles.btnSection}>
                    <Button styles={styles.showMore}>Показать больше</Button>
                </div>
            </div>
        </section>
    );
}

export default SearchResult;
