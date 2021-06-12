import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Profile/></div>
            <Footer/>
        </>
    )
};

export default ProfilePage;