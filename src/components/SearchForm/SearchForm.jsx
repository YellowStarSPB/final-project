import React from 'react';
import Input from '../UI/Input/Input';
import styles from './SearchForm.module.scss';

function SearchForm() {
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
            </div>

            <div className={styles.rightWrapper}>right</div>
        </form>
    );
}

export default SearchForm;
