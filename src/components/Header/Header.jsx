import React from 'react';
import logo from '../../assets/img/header/logo.svg';
import accauntLogo from '../../assets/img/header/accauntlogo.svg';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.wrapper}>
                <ul className={styles.navigate}>
                    <li>Главная</li>
                    <li>Тарифы</li>
                    <li>FAQ</li>
                </ul>
                <div className={styles.info}>
                    <p>
                        Использовано компаний <span>34</span>
                    </p>
                    <p>
                        Лимит по компаниям <span style={{ color: '#8AC540' }}>100</span>
                    </p>
                </div>

                <div className={styles.accauntWrapper}>
                    <div className={styles.accauntWrapper__info}>
                        <p>Алексей А.</p>
                        <button>Выйти</button>
                    </div>
                    <div className={styles.accauntWrapper__img}>
                        <img src={accauntLogo} alt="accauntLogo" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
