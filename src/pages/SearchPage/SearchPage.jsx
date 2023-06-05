import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

import firstImg from '../../assets/img/searchPage/1.svg';
import secondImg from '../../assets/img/searchPage/2.svg';
import thirdImg from '../../assets/img/searchPage/3.png';

import styles from './SearchPage.module.scss';
function SearchPage() {
    return (
        <section className={styles.searchPage}>
            <div className={styles.leftWrapper}>
                <h2>Найдите необходимые данные в пару кликов.</h2>
                <p>
                    Задайте параметры поиска.
                    <br />
                    Чем больше заполните, тем точнее поиск
                </p>
                <SearchForm />
            </div>

            <div className={styles.imageWrapper}>
                <img src={firstImg} alt="bg" />
                <img src={secondImg} alt="bg" />
                <img src={thirdImg} alt="bg" />
            </div>
        </section>
    );
}

export default SearchPage;
