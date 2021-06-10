import './style.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImClock2 } from 'react-icons/im';
import { BsFillBookmarksFill, BsAwardFill } from 'react-icons/bs';
import { IoMdListBox } from 'react-icons/io';
import { FaGlobe } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { CircularProgress } from '@material-ui/core';

const Course = ({ course }) => {
    return (
        course.content ? <div className="course">
            <div>
                {course.thumbnail ? (
                    <img className="courseImg" src={course.thumbnail} alt={course.title}/>
                ) : (
                    <img className="courseImg" src="/images/stock.jpg" alt={course.title}/>
                )}
                <span><p>{course.title}</p></span>
            </div>

            <div className="coursContent">
                <div className="courseDivider">
                    <div className="courseElement">
                        <h4><MdDescription style={{ fontSize: "23px", position: "relative", top:"4px", right:"7px" }}/>Description</h4>
                        <p>{course.description}</p>
                    </div>

                    <div className="courseElement">
                        <h4><ImClock2 style={{ fontSize: "22px", position: "relative", top:"4px", right:"7px" }}/>Course Duration</h4>
                        <p style={{ fontWeight: "300", color: "#7E7E7E" }}>{course.duration} Hours.</p>
                    </div>

                    <div className="courseElement">
                        <h4><FaGlobe style={{ fontSize: "22px", position: "relative", top:"4px", right:"7px" }}/>URL</h4>
                        <Link to="#">{course.url}</Link>
                    </div>
                </div>

                <div className="courseDivider">
                    <div className="courseElement">
                        <h4><BsFillBookmarksFill style={{ fontSize: "25px", position: "relative", top:"6px", right:"5px" }}/>Content</h4>
                        <ul>
                            {course.content && course.content.map((content) => (
                                <li key={Math.random().toString(36).substr(2, 9)}>{content}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="courseElement">
                        <h4><IoMdListBox style={{ fontSize: "25px", position: "relative", top:"6px", right:"5px" }}/>Pre Requisites</h4>
                        <ul>
                            {course.prerequisites && course.prerequisites.map((prerequisite) => (
                                <li key={Math.random().toString(36).substr(2, 9)}>{prerequisite}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div> : (
            <div style={{ width: "100%", height: "86vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress style={{ color: "#f50057" }}/>
            </div>
        )
    )
};

export default Course;