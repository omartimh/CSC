import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    author: String,
    attachedFile: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const BlogPost = mongoose.model('BlogPost', postSchema);

export default BlogPost;