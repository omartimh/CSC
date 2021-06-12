import mongoose from 'mongoose';
import Job from '../models/Job.js';

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createJob = async (req, res) => {
    const { title, company, info, type, salary } = req.body;
    const newJob = new Job( { title, company, info, type, salary });
    try {
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};