import React, { useEffect } from 'react';
import styles from './LoginPage.module.scss';
import image from '../../assets/img/loginPage/image.png';

import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
function LoginPage() {
    return (
        <section className={styles.loginSection}>
            <div className={styles.titleWrapper}>
                <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                <div>
                    <img src={image} alt="titleImage" />
                </div>
            </div>
            <LoginForm />
        </section>
    );
}

export default LoginPage;
