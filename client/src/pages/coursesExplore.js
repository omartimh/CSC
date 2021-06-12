import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CoursesExplore from '../components/Courses/Explore/Explore';

const CoursesExplorePage = () => {
    return (
        <>
            <Header/>
            <div className="content"><CoursesExplore/></div>
            <Footer/>
        </>
    )
};

export default CoursesExplorePage;