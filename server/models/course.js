import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    content: [String],
    prerequisites: [String],
    duration: String,
    thumbnail: String,
    url: String,
});

const Course = mongoose.model('Course', courseSchema);
export default Course;