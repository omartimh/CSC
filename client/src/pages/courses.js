import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Courses from '../components/Courses/Courses';

const CoursesPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Courses/></div>
            <Footer/>
        </>
    )
};

export default CoursesPage;