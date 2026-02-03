const Post = require("../models/Post.js");

exports.createPost = async (req, res) => {
    try {
        const { text, image } = req.body;

        if (!text && !image) {
            return res.status(400).json({ message: "Post cannot be empty" });
        }

        const post = await Post.create({
            userId: req.user.id,
            username: req.user.username,
            text,
            image
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.user.username)) {
            post.likes.push(req.user.username);
        } else {
            post.likes = post.likes.filter(
                (user) => user !== req.user.username
            );
        }

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.commentPost = async (req, res) => {
    try {
        const { text } = req.body;

        const post = await Post.findById(req.params.id);
        post.comments.push({
            username: req.user.username,
            text
        });

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
