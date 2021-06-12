import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';

const HomePage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Home/></div>
            <Footer/>
        </>
    )
};

export default HomePage;