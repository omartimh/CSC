import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    title: String,
    company: String,
    info: String,
    type: String,
    salary: String
});

const Job = mongoose.model('Job', jobSchema);
export default Job;