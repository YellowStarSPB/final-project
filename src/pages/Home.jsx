import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import ImageSection from '../components/ImageSection/ImageSection';
import MainSection from '../components/MainSection/MainSection';
import TariffSection from '../components/TariffSection/TariffSection';

function Home() {
    return (
        <>
            <MainSection />
            <AboutSection />
            <ImageSection />
            <TariffSection />
        </>
    );
}

export default Home;
