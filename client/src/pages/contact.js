import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

const ContactPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Contact/></div>
            <Footer/>
        </>
    )
};

export default ContactPage;