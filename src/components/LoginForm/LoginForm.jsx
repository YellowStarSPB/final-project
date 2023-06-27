import { useState } from 'react';
import Button from '../UI/Button/Button';
import googleImg from '../../assets/img/form/google.svg';
import faceBookImg from '../../assets/img/form/facebook.svg';
import yandexImg from '../../assets/img/form/yandex.svg';
import keyLockImg from '../../assets/img/form/keylock.svg';

import styles from './LoginForm.module.scss';

import { useDispatch } from 'react-redux';
import { checkUserAuth } from '../../store/authorization/authorization-actions';

function LoginForm() {
    const [inputValue, setInputValue] = useState({
        login: 'sf_student10',
        password: 'KHKfTXb',
    });

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(checkUserAuth(inputValue));
    };

    return (
        <div className={styles.formWrapper}>
            <img className={styles.keyLock} src={keyLockImg} alt="keylock" />
            <form onSubmit={() => {}} className={styles.form}>
                <div className={styles.btnWrapper}>
                    <button disabled className={styles.login}>
                        Войти
                    </button>
                    <button disabled className={styles.register}>
                        Зарегистрироваться
                    </button>
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.loginInput}>
                        <label htmlFor="login">Логин или номер телефона:</label>
                        <input
                            onChange={(e) =>
                                setInputValue((prev) => ({
                                    ...prev,
                                    login: e.target.value,
                                }))
                            }
                            value={inputValue.login}
                            id="login"
                        />
                    </div>
                    <div className={styles.passwordInput}>
                        <label htmlFor="password">Логин или номер телефона:</label>
                        <input
                            onChange={(e) =>
                                setInputValue((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                            value={inputValue.password}
                            type="password"
                            id="password"
                        />
                    </div>
                </div>
                <Button
                    onClick={submitForm}
                    styles={`${styles.submit} ${styles.disabled}`}
                >
                    Войти
                </Button>
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

export default LoginForm;
