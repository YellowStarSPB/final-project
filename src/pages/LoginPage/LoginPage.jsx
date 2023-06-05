import React from 'react';
import styles from './LoginPage.module.scss';
import image from '../../assets/img/loginPage/image.png';

import Form from '../../components/LoginForm/LoginForm';
function Login() {
    return (
        <section className={styles.loginSection}>
            <div className={styles.titleWrapper}>
                <h2>Для оформления подписки на тариф, необходимо авторизоваться.</h2>
                <div>
                    <img src={image} alt="titleImage" />
                </div>
            </div>
            <Form />
        </section>
    );
}

export default Login;
