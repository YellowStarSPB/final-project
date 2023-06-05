import React from 'react';
import innerStyles from './Button.module.scss';

function Button({ children, styles }) {
    return <button className={`${styles} ${innerStyles.button}`}>{children}</button>;
}

export default Button;
