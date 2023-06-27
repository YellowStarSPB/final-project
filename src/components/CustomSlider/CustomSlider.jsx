import React, { useEffect, useRef, useState } from 'react';
import arrowSlider from '../../assets/img/slider/arrowSliderBlack.svg';

import styles from './CustomSlider.module.scss';
import { useResize } from './useResize';

const sliderItems = Array(20).fill(null);
function CustomSlider() {
    const screenWidth = useResize();
    const [positionTrack, setPositionTrack] = useState(0);
    const [maxIndex, setMaxIndex] = useState(Math.floor(sliderItems.length / 8));
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderTrackRef = useRef(null);

    const onClickNext = () => {
        if (currentIndex >= maxIndex) {
            return;
        }
        setCurrentIndex((prev) => prev + 1);
        setPositionTrack((prev) => (prev += -100));
        // if (screenWidth >= 1400) {
        //     const maxWidth = sliderItems.length * 140 - 8 * 140;
        //     if (positionTrack !== -maxWidth) {
        //         setPositionTrack((prev) => (prev += -140));
        //     } else {
        //         return;
        //     }
        // } else if (screenWidth >= 1230 && screenWidth <= 1400) {
        //     const maxWidth = sliderItems.length * 140 - 7 * 140;
        //     if (positionTrack !== -maxWidth) {
        //         setPositionTrack((prev) => (prev += -140));
        //     } else {
        //         return;
        //     }
        // } else if (screenWidth >= 1075 && screenWidth <= 1230) {
        //     const maxWidth = sliderItems.length * 140 - 6 * 140;
        //     if (positionTrack !== -maxWidth) {
        //         setPositionTrack((prev) => (prev += -140));
        //     } else {
        //         return;
        //     }
        // }
    };
    const onClickPrev = () => {
        if (positionTrack === 0) {
            return;
        } else {
            setCurrentIndex((prev) => prev - 1);
            setPositionTrack((prev) => (prev += 100));
        }
    };

    useEffect(() => {
        sliderTrackRef.current.style.transform = `translateX(${positionTrack}%)`;
    }, [positionTrack]);

    // useEffect(() => {
    //     if(screenWidth < 1385) setMaxIndex(sliderItems.length - 6)
    //     if (screenWidth <= 1230) {
    //         setMaxIndex(sliderItems.length -4);
    //     }
    // }, [screenWidth]);

    return (
        <div className={styles.sliderWrapper}>
            <button onClick={onClickPrev} className={styles.btnPrev}>
                <img src={arrowSlider} alt="prev" />
            </button>

            <div className={styles.slider}>
                <div className={styles.infoBlock}>
                    <p>Период</p>
                    <p>Всего</p>
                    <p>Риски</p>
                </div>
                <div ref={sliderTrackRef} className={styles.slider__track}>
                    {sliderItems.map((_, index) => (
                        <div key={index} className={styles.slider__item}>
                            <p>10.09.2021</p>
                            <p>{index}</p>
                            <p>0</p>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={onClickNext} className={styles.btnNext}>
                <img src={arrowSlider} alt="next" />
            </button>
        </div>
    );
}

export default CustomSlider;
