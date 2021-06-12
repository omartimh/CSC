import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Help from '../components/Help/Help';

const HelpPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Help/></div>
            <Footer/>
        </>
    )
};

export default HelpPage;