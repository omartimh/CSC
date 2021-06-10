import mongoose from 'mongoose';
import Course from '../models/course.js';

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCourse = async (req, res) => {
    const { title, description, content, prerequisites, duration, thumbnail, url } = req.body;
    const newCourse = new Course({ title, description, content, prerequisites, duration, thumbnail, url });
    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateCourse = async (req, res) => {

};

export const deleteCourse = async (req, res) => {

};