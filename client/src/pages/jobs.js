import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Jobs from '../components/Jobs/Jobs';

const JobsPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Jobs/></div>
            <Footer/>
        </>
    )
};

export default JobsPage;