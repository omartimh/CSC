import './style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Label from '../../../Label/Label';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { createCourse } from '../../../../actions/courses';

const Form = ({ addCourse }) => {

    const [courseData, setCourseData] = useState({ title: '', description: '', content: '', prerequisites: '', duration: '', url: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(courseData));
        addCourse();
    };

    return (
        <div className="coursesForm">
            <form onSubmit={handleSubmit}>
                <h2>Create Course</h2>
                <br/><hr/>

                <div>
                    <><Label htmlFor="title" text="Course Title"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <Input id="title" name="title" type="text" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}/>
                </div>

                <div>
                    <><Label htmlFor="description" text="Course Description"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <textarea id="description" name="description" cols="30" rows="10" value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}></textarea>
                </div>

                <div>
                    <><Label htmlFor="content" text="Course Content"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <Input id="content" name="content" type="text" value={courseData.content} onChange={(e) => setCourseData({ ...courseData, content: e.target.value.split(',') })}/>
                </div>

                <div>
                    <><Label htmlFor="prerequisites" text="Course Pre Requisites"/><i style={{ fontSize: "13px", color: "#CCC" }}> Optional</i></>
                    <Input id="prerequisites" name="prerequisites" type="text" value={courseData.prerequisites} onChange={(e) => setCourseData({ ...courseData, prerequisites: e.target.value.split(',') })}/>
                </div>

                <div>
                    <><Label htmlFor="duration" text="Course Duration"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <span>
                        <Input id="duration" name="duration" type="range" min="1" max="300" step="1" value={courseData.duration} onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}/>
                    </span>
                </div>

                <div>
                    <><Label htmlFor="url" text="Course URL"/><i style={{ fontSize: "13px", color: "#CCC" }}> Optional</i></>
                    <span>
                        <Input id="url" name="url" type="url" value={courseData.url} onChange={(e) => setCourseData({ ...courseData, url: e.target.value })}/>
                    </span>
                </div>

                <div>
                    <Button type="submit" text="Create" className="btn btn-success"/>
                </div>
            </form>
        </div>
    )
}

export default Form;