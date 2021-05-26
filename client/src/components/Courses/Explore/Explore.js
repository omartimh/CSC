import './style.css';
import React, { useState } from 'react';

import Label from '../../Label/Label';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const Explore = () => {

    const [toggleForm, setToggleFomr] = useState(false);

    const addCourse = () => {
        setToggleFomr(!toggleForm);
    };

    const handleSubmit = () => {
        console.log("Submit Course");
    };

    return (
        <div className="coursesExplore">
            {!toggleForm ? (
                <Button text="Add Course" className="btn btn-primary toggle" onClick={addCourse}/>
            ) : (
                <Button text="Courses" className="btn btn-danger toggle" onClick={addCourse}/>
            )}

            {toggleForm ? (
                <form onSubmit={handleSubmit}>
                    <h2>Create Course</h2>
                    <br/><hr/>
                    <div>
                        <><Label htmlFor="title" text="Course Title"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                        <Input id="title" name="title" type="text"/>
                    </div>

                    <div>
                        <><Label htmlFor="description" text="Course Description"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                        <textarea id="description" name="description" cols="30" rows="10"></textarea>
                    </div>

                    <div>
                        <><Label htmlFor="content" text="Course Content"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                        <Input id="content" name="content" type="text"/>
                    </div>

                    <div>
                        <><Label htmlFor="prerequisites" text="Course Pre Requisites"/><i style={{ fontSize: "13px", color: "#CCC" }}> Optional</i></>
                        <Input id="prerequisites" name="prerequisites" type="text"/>
                    </div>

                    <div>
                        <><Label htmlFor="duration" text="Course Duration"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                        <span>
                            <Input id="duration" name="duration" type="range"/>
                        </span>
                    </div>

                    <div>
                        <><Label htmlFor="url" text="Course URL"/><i style={{ fontSize: "13px", color: "#CCC" }}> Optional</i></>
                        <span>
                            <Input id="url" name="url" type="url"/>
                        </span>
                    </div>

                    <div>
                        <Button type="submit" text="Create" className="btn btn-success"/>
                    </div>
                </form>
            ) : (
                <div className="coursesBrowse" style={{ textAlign: "center" }}>
                    <h3>Course</h3>
                    <h3>Course</h3>
                    <h3>Course</h3>
                </div>
            )}
            
        </div>
    )
};

export default Explore;