import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    title: String,
    body: String,
    author: String,
    attachedFile: String,
    tags: [String],
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const BlogPost = mongoose.model('BlogPost', postSchema);

export default BlogPost;