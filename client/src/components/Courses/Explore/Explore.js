import './style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import { CircularProgress } from '@material-ui/core';

import Form from './Form/Form';
import Course from './Course/Course';
import Button from '../../Button/Button';
import { getCourses } from '../../../actions/courses';

const Explore = () => {

    const [toggleForm, setToggleFomr] = useState(false);
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    const addCourse = () => {
        setToggleFomr(!toggleForm);
    };

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    return (
        <div className="coursesExplore">
            {toggleForm ? (
                <>
                    <Form addCourse={addCourse}/>
                    <Button text="Courses" className="btn btn-danger toggle" onClick={addCourse}/>
                </>   
            ) : (
                <div className="coursesBrowse">
                    <div className="coursesBrowseTitle">
                        <h1>All Courses</h1>
                        <Button text="Add Course" className="btn btn-primary toggle" onClick={addCourse}/>
                    </div>
                    <div className="blogBar">
                        <ul>
                            <li><Button text="Newest"/></li>
                            <li><Button text="Popular"/></li>
                            <li><Button text="Trending"/></li>
                            <li><Button text="Oldest"/></li>
                            <li><Button text="More" icon={<IoIosArrowDown style={{position: "relative", top: "3px"}}/>}/></li>
                        </ul>
                    </div>

                    {/* <hr/>   
                    <Course/>
                    <hr />
                    <Course/>
                    <hr />
                    <Course/> */}

                    {!courses.length ? (
                    <div style={{ width: "100%", height: "45vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress style={{ color: "#f50057" }}/>
                    </div>
                    ) : courses.map((course) => (
                        <Course key={course._id} course={course}/>
                    ))} 
                </div>
            )}
            
        </div>
    )
};

export default Explore;