import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Blog from '../components/Blog/Blog';

const BlogPage = () => {
    return (
        <>
            <Header/>
            <div className="content"><Blog/></div>
            <Footer/>
        </>
    )
};

export default BlogPage;