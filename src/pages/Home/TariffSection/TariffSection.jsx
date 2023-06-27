import React from 'react';
import TariffCard from '../../../components/TariffCard/TariffCard';

import { cardInfo } from '../../../components/TariffCard/mock';

import styles from './TariffSection.module.scss';

function TariffSection() {
    return (
        <section>
            <h2>наши тарифы</h2>
            <div className={styles.tariffWrapper}>
                {cardInfo.map((tariff) => (
                    <TariffCard key={tariff.titlte} {...tariff} />
                ))}
            </div>
        </section>
    );
}

export default TariffSection;
