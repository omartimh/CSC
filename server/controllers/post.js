import mongoose from 'mongoose';
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
    const newPost = new BlogPost({ ...post, author: req.userId, createdAt: new Date().toISOString() });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {

};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post exists with that id');
    }
    const updatedPost = await BlogPost.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const post = await BlogPost.findById(id);
    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No post exists with that id");
    }
    await BlogPost.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully" });
};