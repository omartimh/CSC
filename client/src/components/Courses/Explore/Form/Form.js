import './style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import Label from '../../../Label/Label';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { createCourse } from '../../../../actions/courses';

const Form = ({ btn, courseForm }) => {

    const [courseData, setCourseData] = useState({ title: '', description: '', content: '', prerequisites: '', duration: '15', thumbnail: '', url: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCourse(courseData));
        courseForm();
    };

    return (
        <div className="coursesForm">
            <form onSubmit={handleSubmit}>
                <span>
                    <h2>Create Course</h2>
                    <Button text="Back to Courses" onClick={courseForm}/>
                </span>
                
                <br/><hr/>

                <div>
                    <><Label htmlFor="title" text="Course Title"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <Input id="title" name="title" type="text" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} required/>
                </div>

                <div>
                    <><Label htmlFor="description" text="Course Description"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <textarea id="description" name="description" cols="30" rows="10" value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} required></textarea>
                </div>

                <div>
                    <><Label htmlFor="content" text="Course Content"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <Input id="content" name="content" type="text" value={courseData.content} onChange={(e) => setCourseData({ ...courseData, content: e.target.value.split(',') })} required/>
                </div>

                <div>
                    <><Label htmlFor="prerequisites" text="Course Pre Requisites"/><i style={{ fontSize: "13px", color: "#7E7E7E" }}> Optional</i></>
                    <Input id="prerequisites" name="prerequisites" type="text" value={courseData.prerequisites} onChange={(e) => setCourseData({ ...courseData, prerequisites: e.target.value.split(',') })}/>
                </div>

                <div>
                    <><Label htmlFor="duration" text="Course Duration"/><i style={{ fontSize: "13px", color: "red" }}> *</i></>
                    <span>
                        <Input id="duration" name="duration" type="range" min="1" max="300" value={courseData.duration} onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })} required/>
                        <p style={{ margin: "0 0 0 1em", width: "100px", padding: "0.25em 0", textAlign: "center", fontSize: "15px", fontWeight: "300", border: "2px solid #CCC", borderRadius: "5px" }}>{courseData.duration}<b>hrs</b></p>
                    </span> 
                </div>

                <div>
                    <><Label htmlFor="thumbnail" text="Course Thumbnail"/><i style={{ fontSize: "13px", color: "#7E7E7E" }}> Optional</i></>
                    <FileBase
                        id="thumbnail"
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setCourseData({ ...courseData, thumbnail: base64 })}
                    />
                </div>

                <div>
                    <><Label htmlFor="url" text="Course URL"/><i style={{ fontSize: "13px", color: "#7E7E7E" }}> Optional</i></>
                    <span>
                        <Input id="url" name="url" type="url" value={courseData.url} onChange={(e) => setCourseData({ ...courseData, url: e.target.value })}/>
                    </span>
                </div>

                <div>
                    <Button type="submit" text="Create" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default Form;