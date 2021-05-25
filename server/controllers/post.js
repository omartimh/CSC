import BlogPost from '../models/blogPost.js';

export const getPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.status(200).json(blogPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new BlogPost(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getPost = (req, res) => {

};

export const updatePost = (req, res) => {

};

export const deletePost = (req, res) => {

};

export const likePost = (req, res) => {

};