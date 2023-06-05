import React from 'react';
import Button from '../UI/Button/Button';
import googleImg from '../../assets/img/form/google.svg';
import faceBookImg from '../../assets/img/form/facebook.svg';
import yandexImg from '../../assets/img/form/yandex.svg';
import keyLockImg from '../../assets/img/form/keylock.svg';

import styles from './LoginForm.module.scss';
import Input from '../UI/Input/Input';

function Form() {
    return (
        <div className={styles.formWrapper}>
            <img className={styles.keyLock} src={keyLockImg} alt="keylock" />
            <form className={styles.form}>
                <div className={styles.btnWrapper}>
                    <button className={styles.login}>Войти</button>
                    <button className={styles.register}>Зарегистрироваться</button>
                </div>

                <div className={styles.inputWrapper}>
                    <Input
                        styles={styles.loginInput}
                        id={'login'}
                        type={'text'}
                        label={'Логин или номер телефона:'}
                    />
                    <Input
                        styles={styles.passwordInput}
                        id={'password'}
                        type={'password'}
                        label={'Пароль:'}
                    />
                </div>
                <Button styles={`${styles.submit} ${styles.disabled}`}>Войти</Button>
                <div className={styles.recoverPassword}>
                    <button>Восстановить пароль</button>
                </div>
                <div className={styles.entryOptions}>
                    <p>Войти через:</p>
                    <div>
                        <img src={googleImg} alt="google" />
                        <img src={faceBookImg} alt="facebook" />
                        <img src={yandexImg} alt="yandex" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
