import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

const AboutPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><About/></div>
            <Footer/>
        </>
    )
};

export default AboutPage;