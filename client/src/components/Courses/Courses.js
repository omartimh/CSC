import './style.css';
import React from 'react'
import { Link } from 'react-router-dom';

// import Button from '../Button/Button';

const Courses = () => {
    return (
        <div className="courses">
            <div className="coursesHeader">
                <h1>Experience a wide variety of courses</h1>
                <h2>Enhance & Develop your skills</h2>
                <Link to="/courses/explore" className="btn btn-primary">Explore online courses</Link>
            </div>

            <div className="coursesContent">
                <span>
                    <h1>Get the chance to <Link to="/courses/explore" style={{ color: "#1976D2", textDecoration: "none" }}>create your own online courses</Link> with just a few steps!</h1>
                    <h1><b>Watch & Learn</b> from experts all around the world.</h1>
                </span>
                <div className="border">
                    <img src="images/courses.jpg" alt="courses"/>
                </div>
            </div>
        </div>
    )
};

export default Courses
