import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Settings from '../components/Settings/Settings';

const SettingsPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Settings/></div>
            <Footer/>
        </>
    )
};

export default SettingsPage;